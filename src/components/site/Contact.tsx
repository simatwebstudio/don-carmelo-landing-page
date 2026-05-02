import logo from "@/assets/logo-doncarmelo.png";

export const Contact = () => {
  return (
    <section id="contatti" className="relative py-24 md:py-32 border-t border-border/60">
      <div className="container-px max-w-5xl mx-auto text-center">
        <img
          src={logo}
          alt="Don Carmelo Foodtruck"
          className="w-28 h-28 mx-auto rounded-full ring-2 ring-primary/40 mb-8"
        />
        <h2 className="font-display text-5xl md:text-7xl mb-4">
          VIENI A <span className="shimmer-gold">TROVARCI</span>
        </h2>
        <p className="font-script text-2xl md:text-3xl text-foreground/85 mb-12">
          ti aspettiamo al foodtruck
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:+393270867129"
            className="group bg-card/70 border border-border hover:border-gold/60 rounded-2xl p-8 transition-smooth"
          >
            <p className="font-condensed uppercase tracking-widest text-xs text-gold mb-3">Telefono</p>
            <p className="font-display text-2xl group-hover:text-gold transition-smooth">
              327 086 7129
            </p>
          </a>

          <a
            href="https://instagram.com/doncarmelo.89"
            target="_blank"
            rel="noreferrer"
            className="group bg-card/70 border border-border hover:border-gold/60 rounded-2xl p-8 transition-smooth"
          >
            <p className="font-condensed uppercase tracking-widest text-xs text-gold mb-3">Instagram</p>
            <p className="font-display text-2xl group-hover:text-gold transition-smooth">
              @doncarmelo.89
            </p>
          </a>

          <div className="bg-card/70 border border-border rounded-2xl p-8">
            <p className="font-condensed uppercase tracking-widest text-xs text-gold mb-3">Location</p>
            <p className="font-display text-xl leading-snug">
              Bra · Piazza Giolitti<br />Moglia di Cherasco
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/393270867129"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-gradient-gold text-primary-foreground font-condensed uppercase tracking-wider shadow-gold hover:scale-105 transition-smooth"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  );
};