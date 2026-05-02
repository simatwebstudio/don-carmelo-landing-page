export const Footer = () => (
  <footer className="border-t border-border/60 py-10 container-px max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-condensed uppercase tracking-widest">
      <p>© {new Date().getFullYear()} Don Carmelo Foodtruck — Tutti i diritti riservati</p>
      <p>
        @salvatorevolsi · @valentinadimora
      </p>
    </div>
  </footer>
);