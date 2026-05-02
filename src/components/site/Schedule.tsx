const lunch = [
  { day: "Mercoledì", time: "12.00 — 14.00", place: "Moglia di Cherasco" },
  { day: "Giovedì", time: "12.00 — 14.00", place: "Moglia di Cherasco" },
  { day: "Venerdì", time: "12.00 — 14.00", place: "Moglia di Cherasco" },
];

const dinner = [
  { day: "Giovedì", time: "19.30 — 00.00", place: "Bra · Piazza Giolitti" },
  { day: "Venerdì", time: "19.30 — 03.00", place: "Bra · Piazza Giolitti" },
  { day: "Sabato", time: "19.30 — 03.00", place: "Bra · Piazza Giolitti" },
];

const Block = ({ title, rows }: { title: string; rows: typeof lunch }) => (
  <div className="bg-card/70 border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:border-gold/40 transition-smooth">
    <h3 className="font-display text-3xl md:text-4xl mb-6">
      <span className="text-foreground">{title.split(" ")[0]} </span>
      <span className="text-gradient-gold">{title.split(" ").slice(1).join(" ")}</span>
    </h3>
    <div className="dotted-divider w-24 mb-6" />
    <ul className="space-y-5">
      {rows.map((r) => (
        <li key={r.day + r.time} className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline">
          <span className="font-script text-2xl text-gold">{r.day}</span>
          <span className="font-condensed uppercase tracking-wider text-sm text-muted-foreground text-right">
            {r.time}
          </span>
          <span className="col-span-2 font-display text-xl text-foreground/95">{r.place}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Schedule = () => {
  return (
    <section id="orari" className="py-24 md:py-32 container-px max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-condensed uppercase tracking-[0.4em] text-xs text-gold mb-4">— Dove e quando —</p>
        <h2 className="font-display text-5xl md:text-7xl">
          ORARI & <span className="shimmer-gold">LOCATION</span>
        </h2>
        <p className="font-script text-3xl md:text-4xl text-foreground/85 mt-6">vi aspettiamo!!!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Block title="Orario Pranzo" rows={lunch} />
        <Block title="Orario Serale" rows={dinner} />
      </div>

      <p className="text-center mt-10 text-muted-foreground text-sm">
        Per eventi privati e collaborazioni, scrivici in DM su Instagram.
      </p>
    </section>
  );
};