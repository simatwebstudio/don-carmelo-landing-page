# Don Carmelo Foodtruck

Sito statico vanilla HTML, CSS e JavaScript per la landing di Don Carmelo Foodtruck.

## Struttura

- `index.html`: pagina principale con markup semantico, SEO di base, Open Graph e dati strutturati.
- `styles.css`: stili globali, layout responsive, componenti e animazioni.
- `script.js`: menu mobile, header su scroll, anno footer e funzione `isOpen()` per mostrare lo stato di apertura.
- `images/`: asset fotografici, logo e icone del manifest.
- `404.html`: pagina di errore coerente con lo stile del sito.
- `privacy.html` e `cookie.html`: placeholder tecnici da sostituire con testi approvati.
- `manifest.json`, `robots.txt`, `sitemap.xml`: file di supporto per PWA di base e crawler.

## Uso locale

Il sito non richiede build o dipendenze JavaScript. Si può aprire direttamente `index.html` nel browser, oppure servirlo con un server statico locale:

```bash
python -m http.server 8080
```

## Pubblicazione

Caricare tutti i file della root e la cartella `images/` su un hosting statico. Prima della pubblicazione verificare il dominio definitivo in:

- `index.html`, nei tag canonical, Open Graph e JSON-LD;
- `robots.txt`;
- `sitemap.xml`.

## Asset e font

Gli asset principali sono locali. La tipografia usa Google Fonts (`Bebas Neue`, `Oswald`, `Great Vibes`, `Inter`) con `display=swap`.

## Privacy e cookie

Le pagine privacy e cookie sono placeholder e non sono documenti legali definitivi. Il sito attuale non include analytics, mappe embedded, form, pixel o chat; se verranno aggiunti strumenti di terze parti, serviranno testi legali aggiornati e un sistema di consenso coerente.
