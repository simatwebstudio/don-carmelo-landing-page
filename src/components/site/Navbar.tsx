import { useState, useEffect } from "react";
import logo from "@/assets/logo-doncarmelo.png";

const links = [
  { href: "#menu", label: "Menù" },
  { href: "#crea", label: "Crea il tuo Panino" },
  { href: "#orari", label: "Orari" },
  { href: "#contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-px max-w-7xl mx-auto flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Don Carmelo Foodtruck" className="h-12 w-12 rounded-full ring-2 ring-primary/40" />
          <div className="leading-tight">
            <p className="font-display text-xl text-gold tracking-wider">DON CARMELO</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Foodtruck</p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-condensed uppercase text-sm tracking-widest text-foreground/80 hover:text-gold transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+393270867129"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground font-condensed uppercase text-sm tracking-wider shadow-gold hover:scale-105 transition-smooth"
        >
          Chiama Ora
        </a>

        <button
          aria-label="Apri menu"
          className="md:hidden p-2 text-gold"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-smooth ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-current transition-smooth ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition-smooth ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border/60">
          <ul className="container-px py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="font-condensed uppercase tracking-widest text-foreground/90 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+393270867129"
                className="inline-block px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground font-condensed uppercase text-sm tracking-wider"
              >
                Chiama: 327 086 7129
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};