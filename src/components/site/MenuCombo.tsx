import combo from "@/assets/combo-menu.jpg";

export const MenuCombo = () => {
  return (
    <section id="menu" className="relative py-24 md:py-32 container-px max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-condensed uppercase tracking-[0.4em] text-xs text-gold mb-4">— Il nostro menù —</p>
        <h2 className="font-display text-5xl md:text-7xl">
          MENÙ <span className="shimmer-gold">DON CARMELO</span>
        </h2>
        <div className="dotted-divider max-w-xs mx-auto mt-6" />
      </div>

      {/* Featured combo */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-card/60 border border-border rounded-3xl p-8 md:p-12 shadow-deep backdrop-blur-sm">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-radial-gold blur-2xl" />
          <img
            src={combo}
            alt="Menù combo: panino, patatine fritte e bibita"
            loading="lazy"
            className="relative rounded-2xl w-full object-cover aspect-square shadow-deep"
          />
          <div className="absolute -top-6 -right-6 bg-gradient-gold text-primary-foreground rounded-full w-28 h-28 flex flex-col items-center justify-center font-display shadow-gold rotate-12">
            <span className="text-xs tracking-widest">SOLO</span>
            <span className="text-3xl leading-none">€9</span>
            <span className="text-[10px] tracking-widest">,00</span>
          </div>
        </div>

        <div>
          <p className="font-script text-4xl md:text-5xl text-gold mb-3">Menù Completo</p>
          <h3 className="font-display text-3xl md:text-4xl mb-6">PANINO + PATATINE + BIBITA</h3>
          <ul className="space-y-3 text-foreground/85 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gold">●</span> Panino artigianale a scelta
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">●</span> Porzione di patatine fritte croccanti
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold">●</span> Bibita a scelta (Coca-Cola, Fanta, Estathè)
            </li>
          </ul>
          <a
            href="#orari"
            className="inline-block px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-condensed uppercase tracking-wider shadow-gold hover:scale-105 transition-smooth"
          >
            Vieni a provarlo
          </a>
        </div>
      </div>

      {/* Sides */}
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        <div className="flex items-center justify-between bg-card/60 border border-border rounded-2xl p-6">
          <div>
            <p className="font-condensed uppercase tracking-widest text-sm text-muted-foreground">Patatine Fritte</p>
            <p className="font-display text-2xl">PORZIONE MEDIA</p>
          </div>
          <p className="font-display text-3xl text-gold">€ 3,00</p>
        </div>
        <div className="flex items-center justify-between bg-card/60 border border-border rounded-2xl p-6">
          <div>
            <p className="font-condensed uppercase tracking-widest text-sm text-muted-foreground">Patatine Fritte</p>
            <p className="font-display text-2xl">PORZIONE GRANDE</p>
          </div>
          <p className="font-display text-3xl text-gold">€ 4,50</p>
        </div>
      </div>
    </section>
  );
};