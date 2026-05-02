import build from "@/assets/build-panino.jpg";

const groups = [
  {
    title: "Carne",
    items: ["Salamella", "Porchetta", "Wurstel", "Bacon"],
  },
  {
    title: "Formaggi",
    items: ["Scamorza", "Edamer", "Provola", "Mozzarella di Bufala"],
  },
  {
    title: "Verdure",
    items: [
      "Lattuga",
      "Pomodori",
      "Crauti",
      "Peperoni",
      "Cipolla",
      "Friarielli",
      "Patatine fritte",
      "Frittata",
    ],
  },
  {
    title: "Salse",
    items: ["Maionese", "Ketchup", "Barbecue", "Senape", "Salse piccanti"],
  },
];

export const BuildPanino = () => {
  return (
    <section id="crea" className="relative py-24 md:py-32 border-y border-border/60">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </div>

      <div className="relative container-px max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-condensed uppercase tracking-[0.4em] text-xs text-gold mb-4">— Componilo tu —</p>
          <h2 className="font-display text-5xl md:text-7xl">
            CREA IL <span className="shimmer-gold">TUO PANINO</span>
          </h2>
          <p className="font-script text-2xl md:text-3xl text-foreground/80 mt-4">
            scegli i tuoi ingredienti preferiti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-radial-gold blur-3xl scale-90" />
            <img
              src={build}
              alt="Esploso degli ingredienti del panino"
              loading="lazy"
              className="relative w-full max-w-md mx-auto animate-float"
            />
          </div>

          <div className="order-1 md:order-2 grid sm:grid-cols-2 gap-6">
            {groups.map((g) => (
              <div
                key={g.title}
                className="bg-card/70 border border-border rounded-2xl p-6 hover:border-gold/50 transition-smooth"
              >
                <p className="font-script text-2xl text-gold mb-3">{g.title}</p>
                <ul className="space-y-1.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="font-condensed uppercase text-sm tracking-wider text-foreground/85 flex items-center gap-2"
                    >
                      <span className="text-gold text-xs">▸</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center">
          <div className="dotted-divider w-40 mb-6" />
          <p className="font-condensed uppercase tracking-widest text-muted-foreground text-sm">
            Il tuo panino composto
          </p>
          <p className="font-display text-6xl md:text-7xl shimmer-gold mt-2">€ 7,00</p>
        </div>
      </div>
    </section>
  );
};