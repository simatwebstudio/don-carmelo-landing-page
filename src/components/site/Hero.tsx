import hero from "@/assets/hero-panino.jpg";
import logo from "@/assets/logo-doncarmelo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Panino gourmet Don Carmelo con porchetta e scamorza"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 container-px max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="dotted-divider w-16" />
            <span className="font-condensed uppercase tracking-[0.4em] text-xs text-gold">
              Street Food Gourmet
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-4">
            <span className="block text-foreground">DON</span>
            <span className="block shimmer-gold">CARMELO</span>
          </h1>

          <p className="font-script text-3xl md:text-4xl text-foreground/90 mb-8">
            Panini gourmet & street food
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Dal nostro foodtruck a Bra e Moglia di Cherasco: panini artigianali,
            patatine fritte croccanti e ingredienti scelti con cura. Crea il tuo
            panino come piace a te. 🔥
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-condensed uppercase tracking-wider shadow-gold hover:scale-105 transition-smooth"
            >
              Scopri il Menù
            </a>
            <a
              href="#orari"
              className="px-8 py-4 rounded-full border border-gold/60 text-gold font-condensed uppercase tracking-wider hover:bg-gold/10 transition-smooth"
            >
              Dove trovarci
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-gold blur-3xl scale-110" />
            <img
              src={logo}
              alt="Logo Don Carmelo Foodtruck"
              className="relative w-80 h-80 object-contain animate-float drop-shadow-[0_20px_40px_hsl(0_0%_0%/0.6)]"
            />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 font-condensed text-xs tracking-[0.4em] uppercase">
        ↓ Scorri
      </div>
    </section>
  );
};