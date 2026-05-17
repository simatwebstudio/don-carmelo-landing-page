"use strict";

const ROME_TIME_ZONE = "Europe/Rome";
const WEEKDAY_INDEX = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};

const WEEKDAY_LABELS = {
  1: "Lunedì",
  2: "Martedì",
  3: "Mercoledì",
  4: "Giovedì",
  5: "Venerdì",
  6: "Sabato",
  7: "Domenica",
};

const OPENING_PERIODS = [
  { day: 3, start: 12 * 60, end: 14 * 60, place: "Moglia di Cherasco" },
  { day: 4, start: 12 * 60, end: 14 * 60, place: "Moglia di Cherasco" },
  { day: 5, start: 12 * 60, end: 14 * 60, place: "Moglia di Cherasco" },
  { day: 4, start: 19 * 60 + 30, end: 0, place: "Bra · Piazza Giolitti" },
  { day: 5, start: 19 * 60 + 30, end: 3 * 60, place: "Bra · Piazza Giolitti" },
  { day: 6, start: 19 * 60 + 30, end: 3 * 60, place: "Bra · Piazza Giolitti" },
];

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: ROME_TIME_ZONE,
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function getRomeTimeParts(date = new Date()) {
  const parts = Object.fromEntries(timeFormatter.formatToParts(date).map((part) => [part.type, part.value]));
  return {
    weekday: WEEKDAY_INDEX[parts.weekday],
    minutes: (Number(parts.hour) % 24) * 60 + Number(parts.minute),
  };
}

function isCurrentPeriod(period, weekday, minutes) {
  if (period.end > period.start) {
    return period.day === weekday && minutes >= period.start && minutes < period.end;
  }

  const nextDay = period.day === 7 ? 1 : period.day + 1;
  return (period.day === weekday && minutes >= period.start) || (nextDay === weekday && minutes < period.end);
}

function formatMinutes(totalMinutes) {
  const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutesInDay / 60);
  const minutes = minutesInDay % 60;
  return `${String(hours).padStart(2, "0")}.${String(minutes).padStart(2, "0")}`;
}

function getNextOpening(weekday, minutes) {
  return OPENING_PERIODS.map((period) => {
    let daysUntil = period.day - weekday;
    if (daysUntil < 0 || (daysUntil === 0 && period.start <= minutes)) {
      daysUntil += 7;
    }

    return {
      ...period,
      daysUntil,
      distance: daysUntil * 1440 + period.start - minutes,
    };
  }).sort((a, b) => a.distance - b.distance)[0];
}

function isOpen(date = new Date()) {
  const { weekday, minutes } = getRomeTimeParts(date);
  const current = OPENING_PERIODS.find((period) => isCurrentPeriod(period, weekday, minutes));

  if (current) {
    return {
      open: true,
      place: current.place,
      closesAt: formatMinutes(current.end),
      next: null,
    };
  }

  const next = getNextOpening(weekday, minutes);
  return {
    open: false,
    place: null,
    closesAt: null,
    next: {
      day: WEEKDAY_LABELS[next.day],
      opensAt: formatMinutes(next.start),
      place: next.place,
    },
  };
}

function initNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  const setScrolled = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 30);
  };

  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Apri menu");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    header?.classList.remove("is-menu-open");
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!toggle || !menu) return;
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Chiudi menu");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    header?.classList.add("is-menu-open");
    document.body.classList.add("menu-open");
  };

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function renderOpenStatus() {
  const status = document.querySelector("[data-open-status]");
  const label = document.querySelector("[data-open-label]");
  const detail = document.querySelector("[data-open-detail]");
  if (!status || !label || !detail) return;

  const currentStatus = isOpen();
  status.classList.toggle("is-open", currentStatus.open);

  if (currentStatus.open) {
    label.textContent = "Aperto ora";
    detail.textContent = `fino alle ${currentStatus.closesAt} a ${currentStatus.place}`;
    return;
  }

  label.textContent = "Chiuso ora";
  detail.textContent = `prossima apertura ${currentStatus.next.day} alle ${currentStatus.next.opensAt} a ${currentStatus.next.place}`;
}

function initOpenStatus() {
  renderOpenStatus();
  window.setInterval(renderOpenStatus, 60 * 1000);
}

function initFooterYear() {
  const year = document.querySelector("[data-current-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initOpenStatus();
  initFooterYear();
});

window.isOpen = isOpen;
