# Layout-Analyse des Lebensreise-Blogs

## 1. Auftrag und Prüfstand

- Untersuchte Quelle: `/Users/lotharschweigerer/Desktop/Lebensreise Kopie`
- Gestalterische Referenz: `arbeit-leben/03-leben-sfo/03-leben-sfo-ankunft.html`
- Bestand: 186 HTML-Dateien, ein zentrales `style.css`, ein `script.js`, Bild- und Audioordner sowie ein Archiv.
- Prüfart: statische Bestands-, Struktur-, Klassen- und Pfadanalyse. Es wurden keine Blogdateien verändert, gelöscht oder sprachlich bearbeitet.
- 178 HTML-Dateien enthalten Markup; acht `.html`-Dateien sind vollständig leer.

## 2. Referenzlayout: `03-leben-sfo-ankunft.html`

Die Referenzseite bildet eine klare Einzelseiten-Struktur:

1. vollständiger `head` mit UTF-8, Viewport, Seitentitel, Google-Fonts (Inter und Crimson Text) und `../../style.css`,
2. fixe Hauptnavigation `.topnav`,
3. Hero als `header.story-header` mit Inline-Hintergrund aus Verlauf und Bild,
4. `.hero-overlay` mit `h1` und `.hero-subtitle`,
5. optionaler Bildhinweis als `section.bildhinweis > .content`,
6. `main`, darin `section.geschichte-text > .content`,
7. Jahres-/Einleitungselement `.story-intro`,
8. Fließtext und optionales `figure`/`figcaption`,
9. `section.weiterlesen > .content` mit `.weiter-grid` und `.story-back`,
10. `footer.footer`.

Typografisch ist der Fließtext auf 760 px begrenzt (`.geschichte-text .content`), nutzt Crimson Text mit `clamp(1.35rem, 2vw, 1.7rem)`, Zeilenhöhe 1,7 und 1,8 rem Absatzabstand. Der allgemeine `.content`-Container ist 820 px breit. Der Hero ist mindestens 58 vh hoch und verwendet `background-size: contain`; die Navigation bleibt fixiert.

Die Referenz selbst ist nicht vollständig frei von technischen Altlasten:

- vier Inline-Styles (Hero, `figure`, `img`, `figcaption`),
- `.story-header` ist im Stylesheet doppelt definiert; der spätere Block überschreibt unter anderem Hintergrundfarbe und erzwingt mit `!important` `contain`, `no-repeat` und Zentrierung,
- der Overlay-Verlauf steckt zusammen mit dem Bild im Inline-`background-image`; durch das globale `contain !important` kann auch die Verlaufsebene unerwünscht begrenzt werden,
- für `.geschichte-text`, `.weiterlesen` und `.story-header` fehlen eigene schmale Mobile-Paddings; nur Navigation, Footer und einige andere Komponenten haben gezielte kleine Breakpoints.

## 3. Vorhandene Layoutvarianten und Seitentypen

### A. Referenznahe Einzelseiten (`story-header`)

**Kennzeichnende Klassen:** `.topnav`, `.story-header`, `.hero-overlay`, `.hero-subtitle`, `.bildhinweis` (optional), `.geschichte-text`, `.content`, `.story-intro` (optional), `.story-image` oder unklassifiziertes `figure`, `.weiterlesen`, `.weiter-grid`, `.story-back`, `.footer`.

**Betroffene Dateien:** 88 Seiten mit `.story-header`, vor allem:

- `arbeit-leben/01-studium-giessen/*.html` (Einzelseiten),
- `arbeit-leben/02-forschung-giessen/*.html` (Einzelseiten),
- `arbeit-leben/03-leben-sfo/*.html` (Einzelseiten und dortige Indexseite),
- `arbeit-leben/04-forschung-sfo/*.html` (Einzelseiten und Indexseite),
- zahlreiche `arbeit-leben/05-heidelberg/**`-Einzelseiten,
- `jugend/jugend-*.html` mit Ausnahme mehrerer Gymnasium-Sonderseiten und `jugend-lehrer.html`,
- `kindheit/kindheit-*.html`,
- einzelne Gegenwartsseiten sowie `kontakt.html` und `vorlage-geschichte.html`.

**Abweichungen innerhalb der Familie:** Nur 25 Dateien besitzen nahezu das komplette Klassenprofil der Referenz einschließlich `.bildhinweis` und `.story-intro`; 19 verzichten auf `.bildhinweis`, 18 Kindheitsseiten zusätzlich auf `.story-intro`, sechs verwenden `.story-image`, weitere setzen Bilder als Inline-gestylte `figure`-Elemente. Rücklink und Weiterlesen fehlen auf einzelnen Seiten. `03-leben-sfo-mendocino.html` und mehrere Heidelberger Seiten verwenden statt `.geschichte-text` die Klasse `.story`.

### B. `seitenkopf`-basierte Übersichts- und Einzelseiten

**Kennzeichnende Klassen:** `.seitenkopf`, `.hero-overlay`, `.hero-subtitle`, `.raumintro`, `.kapitel-intro`, `.geschichtenliste`, `.geschichte`, `.kapitelnavigation` beziehungsweise `.chapter-nav`, `.geschichte-text`, `.footer`.

**Betroffene Dateien:** 72 Seiten, insbesondere:

- Haupt-/Kachelseiten `arbeit-leben.html`, `gegenwart.html`, `jugend.html`, `kindheit.html`,
- die meisten Indexseiten unter `arbeit-leben/05-heidelberg/**`, `arbeit-leben/09-berlin/**` und `gegenwart/**`,
- zahlreiche Berliner Einzelseiten mit `article.geschichte-text`,
- die Archivseiten `archiv/kinderklinik*.html`,
- Gymnasium-Sonderseiten.

**Abweichung zur Referenz:** `.seitenkopf` verwendet `background-size: cover` und dieselbe Mindesthöhe von 58 vh; `.raumintro` ist allgemeiner Intro-/Inhaltsraum mit 6 rem oberem Padding, während `.geschichte-text` der engere literarische Textcontainer der Referenz ist. Viele Berlin-Seiten kombinieren `.seitenkopf` mit `article.geschichte-text` und `.chapter-nav`, verzichten aber vollständig auf `.weiterlesen`/`.weiter-grid`/`.story-back`. Die Indexseiten arbeiten mit Kacheln (`.geschichtenliste > .geschichte`) statt mit dem Einzelseitenfluss.

### C. Kachel- und Indexseiten

**Kennzeichnende Klassen:** `.raumintro`, `.kapitel-intro`, `.geschichtenliste`, `.geschichte`; daneben auf der Startseite `.lebensraeume`, `.raum`, `.einstiege`, `.einstiegsliste`.

**Betroffene Dateien:**

- `index.html` als eigenständige Startseite,
- `arbeit-leben.html`, `kindheit.html`, `jugend.html`, `gegenwart.html`,
- `arbeit-leben/01-studium-giessen/index.html` bis `arbeit-leben/05-heidelberg/**/index.html`,
- `arbeit-leben/09-berlin/index.html` und `arbeit-leben/09-berlin/begegnungen/index.html`,
- `gegenwart/begegnungen/index.html`, `gegenwart/beobachtungen/index.html`, `gegenwart/medizin/index.html`.

**Abweichung zur Referenz:** Diese Seiten benötigen bewusst breitere Container (bis 1000/1180 px), Kartenraster und Kapitelintro statt eines 760-px-Fließtextes. Eine direkte Umstellung aller Seiten auf `.geschichte-text` wäre sachlich falsch. Einheitlich werden sollten jedoch Navigation, Hero-Grundregeln, Überschriftensystem, Footer und Pfadlogik.

### D. Neues `page/site-*`-Layout

**Kennzeichnende Klassen:** `.page`, `.header-inner`, `.site-title`, `.site-name`, `.hero`, `.eyebrow`, `.hero-lead`, `.story-section`, `.story-section-header`, `.story-list`, `.story-card`/`.story-link`, `.site-footer`; auf Unterseiten zusätzlich `.story-post`, `.post-date`, `.post-image`, `.post-text`, `.teacher-grid` oder `.story-grid`.

**Betroffene Dateien (19):**

- `arbeit-leben/06-marburg/index.html`, `07-essen/index.html`, `08-goettingen/index.html`, `10-frankfurt-oder/index.html`, `11-medudoc/index.html`,
- `familie-verluste.html` und `familie-verluste/index.html`,
- `musik-schreiben.html` und `musik-schreiben/index.html`,
- `was-geblieben-ist/index.html`,
- `vergangenheit.html`,
- `jugend/jugend-lehrer.html`,
- `archiv/geburt-leben-tod.html`, `archiv/linkedin.html`,
- außerdem die fünf weiteren gleichartig eingebundenen Seiten ergeben sich aus den `?v=10`-Stylesheetvarianten und den genannten Serien.

**Wichtiger Befund:** Das vorhandene `style.css` enthält keine Definitionen für praktisch alle `page/site-*`-, `story-card`-, `story-post`-, `story-grid`- und `teacher-grid`-Klassen. Der Query-String `?v=10` oder `?v=11` wählt keine andere CSS-Datei, sondern lädt dieselbe physische Datei. Diese Seiten sind daher strukturell eine zweite Designgeneration, im aktuellen Bestand aber weitgehend ungestylt. Ihre Navigation hat außerdem nur fünf statt acht Ziele und andere Linktexte. Sie weichen am stärksten von der Referenz ab.

### E. Musikseite

**Datei:** `songs.html`.

**Kennzeichnende Klassen:** `.seitenkopf.musik-header`, `.raumintro`, `.songs-grid`, `.song-card`, `.footer`; eingebundene `<audio>`-Elemente und Bildkarten.

**Einordnung:** echte Sonderseite. Das Drei-/Zwei-/Einspaltenraster besitzt passende Breakpoints bei 900 und 600 px. Diese funktionale Struktur sollte erhalten und nur in das gemeinsame Rahmenlayout eingebettet werden. `musik-schreiben*.html` ist dagegen keine Audioseite, sondern gehört zur unvollständigen neuen Designgeneration.

### F. Weitere Sonderseiten

- `ueber-mich.html`: Prolog, `.haltungen`, `.haltung`, `.lebensmotto`, `.blogmotto`; kein Hero-Header, aber gemeinsame Navigation und Footer.
- `was-geblieben-ist.html`: Hero plus Schlussgedanke; kein `main` und kein Footer.
- `kontakt.html`: nutzt das Einzelseitenlayout, hat jedoch keinen Weiterlesen-Bereich.
- `jugend/jugend-gymnasium.html`, `...-klassenfoto.html`, `...-kollegium-1968.html`, `...-mitschueler.html`: eigene `.gymnasium-header`- und Tabellen/Marker/Personen-Strukturen; zwei enthalten eingebettete `<style>`-Blöcke.
- `arbeit-leben/09-berlin/menschen-in-berlin.html`: eigenes `.page/.article/.kicker`-Fragment ohne Header und Footer.
- `archiv/*`: Mischung aus alter Seitenkopfstruktur, neuer ungestylter Struktur und fehlerhaften Tiefenpfaden; Archiv sollte nicht blind mit Produktionsseiten migriert werden.
- `vorlage-geschichte.html`: Vorlage mit Platzhalterpfaden, keine veröffentlichte Inhaltsseite.

### G. Leere Seiten

Diese acht Dateien sind 0 Byte groß und besitzen deshalb weder `head` noch Layout, Navigation oder Inhalt:

- `gegenwart/begegnungen/100-geburtstag.html`
- `gegenwart/begegnungen/herr-kollege.html`
- `gegenwart/beobachtungen/doppelt-bestraft.html`
- `gegenwart/beobachtungen/homeexchange.html`
- `gegenwart/beobachtungen/ki-im-alltag.html`
- `gegenwart/beobachtungen/reisen.html`
- `gegenwart/medizin/ki-in-der-medizin.html`
- `gegenwart/medizin/telemedizin.html`

Diese dürfen wegen des Verbots, Inhalte zu löschen oder zu erfinden, erst nach einer inhaltlichen Entscheidung behandelt werden.

## 4. Klassenvergleich und Zielbedeutung

| Klasse | heutige Bedeutung | Abweichung/Problem | empfohlene Zielrolle |
|---|---|---|---|
| `.story-header` | Hero für Geschichten, Bild vollständig mit `contain` | doppelt definiert; `!important`; Inline-Hintergrund; mögliche Seitenbalken und Overlay-Unstimmigkeit | Einzelseiten-Hero mit klarer Bildmodus-Variante |
| `.seitenkopf` | Hero für Raum-/Indexseiten und viele Berlin-Stories, Bild mit `cover` | wird für unterschiedliche Seitentypen überladen | gemeinsamer Hero-Baustein plus Modifier `--cover`/`--contain` |
| `.raumintro` | Intro-/Inhaltsbereich von Index- und Sonderseiten | typografisch weniger genau definiert als `.geschichte-text` | ausschließlich Intro/Übersicht, nicht Fließtextartikel |
| `.geschichte-text` | literarischer Fließtext, 760 px, Crimson Text | sowohl `section` als auch `article`; teils ohne Rück-/Weiterbereich | verbindlicher Artikeltext-Container |
| `.story` | alternative Story-Hülle auf sechs Dateien | in `style.css` nicht definiert | auf semantisches `article` plus vorhandene Zielklasse abbilden |
| `.geschichte` | Kachel/Link in Übersichten | Name leicht mit `.geschichte-text` verwechselbar | als Kartenklasse beibehalten oder eindeutig `story-card` vereinheitlichen |
| `.kapitelnavigation` | Heidelberger Navigation | keine CSS-Regel im vorhandenen Stylesheet | mit einer gemeinsamen Kapitel-/Rücknavigation zusammenführen |
| `.chapter-nav` | Berliner Navigation | keine CSS-Regel im vorhandenen Stylesheet | gleiche gemeinsame Navigationskomponente |
| `.bildhinweis` | Text unter dem Hero | keine CSS-Regel im vorhandenen Stylesheet | definierte Hero-Caption-Komponente |
| `.page`, `.site-*`, `.story-card` usw. | zweite Designgeneration | Markup vorhanden, CSS fehlt | entweder vollständig ergänzen oder kontrolliert auf Referenzsystem abbilden |

## 5. Head, Navigation, Header, Main und Footer

- Die klassische Familie bindet Inter 300–600 und Crimson Text 400/600 ein; die neue Familie bindet ausschließlich Inter 400–800 ein. Dadurch entstehen schon ohne weitere CSS-Regeln deutliche typografische Unterschiede.
- Stylesheetpfade kommen in acht Varianten vor: `style.css`, `../style.css`, `../../style.css`, `../../../style.css` sowie dieselben Pfade mit `?v=10` oder `?v=11`. Die meisten sind tiefenabhängig korrekt; die Query-Strings sind lediglich Cache-Buster.
- Klassische Seiten haben acht Navigationsziele; neue Seiten fünf Ziele und andere Bezeichnungen. Einzelne Links zeigen auf `songs.html`, andere auf das nicht vorhandene `musik.html`.
- 164 Seiten verwenden `.topnav`, 162 `.footer`, aber nur 161 `.hero-overlay`/`.hero-subtitle`. Die neue Designgeneration verwendet ein unklassifiziertes `nav` im Header und `.site-footer`.
- `main` fehlt unter anderem bei `was-geblieben-ist.html`; Footer fehlt dort ebenfalls. `arbeit-leben/09-berlin/menschen-in-berlin.html` hat Navigation und `main`, aber keinen Header/Footer. Die acht leeren Dateien haben keine Grundstruktur.
- Einzelseiten verwenden uneinheitlich `section.geschichte-text`, `article.geschichte-text` oder `article.story`. Semantisch ist `article` für eigenständige Geschichten sinnvoll, visuell sollte die Elementwahl jedoch keine Unterschiede verursachen.

## 6. Typografie, Breiten und Abstände

- Referenz-Fließtext: maximal 760 px, Crimson Text, 1,35–1,7 rem, Zeilenhöhe 1,7, Absatzabstand 1,8 rem.
- Allgemeiner Inhalt: `.content` maximal 820 px.
- Kachellisten: `.geschichtenliste` maximal 1000 px; Startseitenraster maximal 1180 px.
- `.raumintro` hat zwar Padding, aber keine verbindliche Texttypografie; dadurch hängt die Darstellung stark von den inneren Elementen ab.
- `.story` besitzt keine Definition. Seiten, die ausschließlich darauf vertrauen, fallen auf Body-Typografie und Standardbreiten zurück.
- Die neue `page/site-*`-Familie besitzt im Stylesheet keine zugehörigen Breiten-, Typografie- oder Abstandsregeln und weicht deshalb fundamental ab.
- `style.css` definiert `.geschichte-text p` zweimal. Der zweite Block ergänzt nur `text-align:left`, ist aber ein unnötig verteilter Regelbestand. `.story-header` ist ebenfalls doppelt und widersprüchlich (zunächst dunkler, später heller Hintergrund; später erzwungene Werte).

## 7. Headerhöhen und Hero-Overlays

- `.story-header` und `.seitenkopf`: jeweils mindestens 58 vh; ersterer `contain`, letzterer `cover`.
- `.hero` der Startseite: 82 vh, bei 900 px 62 vh, bei 600 px 58 vh.
- `.jugend-header`: zunächst 28 vh, als Kombination `.seitenkopf.jugend-header` später 26 vh.
- `.gymnasium-header`: keine Mindesthöhe; enthaltenes Bild fest 340 px hoch, Overlay absolut bei `top:60px`.
- Neue `.hero`-Sektionen erben unbeabsichtigt die Startseiten-Hero-Regel samt Portrait-Hintergrund, weil ihre eigentlich erwarteten neuen CSS-Regeln fehlen.
- Die Overlay-Farbe ist auf helle Schrift ausgelegt. Bei `contain` und sehr hellen Bildern ist Lesbarkeit nicht überall garantiert; ein einheitlicher, vom Bildmodus unabhängiger Overlay-Layer fehlt.

## 8. Bilder, Figures und Bildunterschriften

- 36 Seiten enthalten `figure` und `figcaption` innerhalb der klassischen `section`-Struktur; 26 weitere `article`-Varianten enthalten beides oder zusätzliche Abschnitte.
- Das Referenzbild ist komplett inline gestaltet. Andere Seiten nutzen `.story-image`, wieder andere wiederholen ähnliche Inline-Werte. Das führt zu mehreren Bildbreiten, Radien, Schatten und Abständen.
- `.story-image img` ist zentral geregelt; `figcaption` besitzt jedoch keine allgemeine zentrale Regel. Viele Untertitel sind deshalb inline formatiert oder vom Browserstandard abhängig.
- Sonderfälle wie Klassenfoto, Kollegium, Personenkopf und Songcover brauchen eigene Modifier und dürfen nicht auf ein einziges Standardbildformat gezwungen werden.
- Sicher fehlende Bildziele sind im Pfadkapitel aufgeführt.

## 9. Rücklinks und Weiterlesen

- `.weiterlesen` kommt auf 78 Seiten, `.weiter-grid` auf 76, `.story-back` auf 75 Seiten vor. Schon innerhalb der referenznahen Familie fehlen also einzelne Teile.
- Heidelberger Seiten verwenden `.kapitelnavigation`, Berliner Seiten `.chapter-nav`, vier Seiten `.back-link`.
- Für `.kapitelnavigation` und `.chapter-nav` gibt es im vorhandenen Stylesheet keine Definition; `.story-back` ist definiert.
- Ziel: ein gemeinsamer, semantisch klarer Rück-/Kapitelbereich mit optionaler Weiterlesen-Liste. Inhalte und Linkziele bleiben unverändert; nur Hülle und Klassen werden vereinheitlicht.

## 10. Inline-Styles, doppelte Regeln und veraltete Klassen

- 154 von 186 HTML-Dateien enthalten Inline-Styles; insgesamt wurden 504 `style`-Attribute gefunden.
- Ein großer Teil sind Hero-Hintergründe sowie Bild-/Figure-Stile. Extremwerte: `jugend/jugend-gymnasium-klassenfoto.html` 49 Attribute, `arbeit-leben/09-berlin/konzerthaus-kinderklinik.html` 20, `.../elternhaus.html` 18.
- Eingebettete `<style>`-Blöcke existieren in `jugend/jugend-gymnasium-klassenfoto.html` und `jugend/jugend-gymnasium-mitschueler.html`.
- Doppelte/verteilte CSS-Regeln: `.story-header`, `.geschichte-text p`; mehrere Hero-Sonderfälle überschreiben Höhe, Position und Bildmodus.
- Im Markup verwendete, im zentralen CSS nicht definierte Layoutklassen umfassen insbesondere `.story`, `.bildhinweis`, `.kapitelnavigation`, `.chapter-nav` sowie fast die gesamte neue `page/site-*`-Familie. Diese sind entweder Alt-/Entwurfsklassen oder stammen aus einem fehlenden Stylesheetstand.

## 11. Mobile Darstellung

Positiv:

- `.topnav` wird unter 800 px horizontal scrollbar und verhindert Zeilenumbruch.
- Hauptkarten, Lehrerraster und Songkarten wechseln kontrolliert auf weniger Spalten.
- `clamp()` wird für wichtige Titel und Fließtexte eingesetzt.

Risiken:

- `.geschichte-text` behält auf kleinen Displays 8 vw horizontales Padding und 6 rem oberes Padding; es gibt keinen gezielten Mobile-Block.
- `.story-header` bleibt 58 vh und hat 6 rem/8 vw/4 rem Padding; kurze Displays können Overlay und Navigation ungünstig überlagern.
- `.gymnasium-header img` bleibt 340 px hoch; das absolut platzierte Overlay ist nicht mobil angepasst.
- `.seitenkopf.jugend-header` behält 8 vw horizontales Padding.
- Inline-Breiten und Inline-Abstände sind nicht systematisch responsiv.
- Die neue `page/site-*`-Familie ist ohne CSS überhaupt nicht belastbar responsiv.
- Die fixe Navigation besitzt keinen aktiven Zustandsindikator und kann auf kleinen Geräten nur horizontal gescrollt werden; das ist funktional, aber nicht sehr sichtbar.

## 12. Problematische oder möglicherweise fehlerhafte Pfade

Die statische Prüfung fand 91 lokale `href`-/`src`-Werte, deren Ziel im Projektbestand nicht existiert. Nicht mitgezählt wurden externe URLs, `mailto:`, Anker und `#`-Platzhalter.

### A. Eindeutig falsche Ordnertiefe

- `arbeit-leben/09-berlin/menschen-in-berlin.html`: Stylesheet und sämtliche Hauptnavigationslinks verwenden `../...`, benötigen von dort aber `../../...`; zusätzlich verweist „Musik“ auf `../musik.html` statt auf das vorhandene `songs.html`.
- `archiv/jeden-morgen-um-acht.html`, `archiv/kinderklinik.html`, `archiv/kinderklinik-besprechungskunst-alt.html`: Stylesheet und Hauptnavigation verwenden `../../../...`, obwohl von `archiv/` aus `../...` nötig wäre. Die ersten beiden verweisen außerdem auf ein nicht vorhandenes `archiv/index.html`.
- Das Bild in `archiv/kinderklinik-besprechungskunst-alt.html` verwendet dieselbe zu tiefe Präfixlogik; das erwartete Bild existiert allerdings auch am rechnerisch naheliegenden Ort nicht.

### B. Falscher oder veralteter Seitenname

- `arbeit-leben.html` verweist auf `arbeit-leben/05-marburg/index.html`; vorhanden ist `arbeit-leben/06-marburg/index.html`.
- `was-geblieben-ist.html` verweist auf `musik.html`; vorhanden ist `songs.html`.
- `arbeit-leben/09-berlin/kindergarten.html` verweist auf `elternoase.html`; diese Datei fehlt.

### C. Fehlende verlinkte HTML-Seiten

- San Francisco: `03-leben-sfo-joosten-clan.html` (aus drei Seiten verlinkt), `03-leben-sfo-washington.html`, `03-leben-sfo-rv-reise.html`.
- Heidelberg/Begegnungen: 27 im Index verlinkte Personen-Seiten fehlen, darunter `manfred-schwab.html`, `achim-wenzel.html`, `lukas-amler.html`, `andreas-habenicht.html`, `peter-nawroth.html`, `rolf-ludwig.html`, `verena-bier.html`, `dietrich-schoenberg.html`, `jochen-troeger.html`, `hansjoerg-seyberth.html`, `uwe-querfeld.html`, `karl-paul.html`, `georg-hoffmann.html`, `musa-kockaya.html`, `ertan-mayatepek.html`, `ursula-felderkamp-mueser.html`, `katja-becker.html`, `antonia-joussen.html`, `angelika-eggert.html`, `juergen-magsaam.html`, `dieter-sontheimer.html`, `emmy-koenemge.html`, `christian-benninger.html`, `gerda-mittermeier.html`, `fritz-trefz.html`, `konrad-schaerer.html`, `otto-mehls.html` und `otwin-linderkamp.html`.
- Heidelberg/Klinik: `jeden-morgen-um-acht.html`, `aus-fehlern-lernen.html`, `h10.html`, `so-wollte-ich-nie-chef-werden.html` fehlen im erwarteten Ordner. Eine Datei gleichen Namens wie „Jeden Morgen um acht“ liegt nur im Archiv.
- Jugend: `jugend-gymnasium-hauptgewinn.html` wird zweimal verlinkt, fehlt aber.
- Kindheit: `kindheit-kreidler-vater.html` wird zweimal verlinkt, fehlt aber.

### D. Fehlende Medien

- `arbeit-leben/03-leben-sfo/03-leben-sfo-ulli.html` → `images/leben-sfo-ulli.jpg`
- `arbeit-leben/09-berlin/begegnungen/geschaeftsfuehrer.html` → `images/berlin/portraits/gerrit-schwind.jpg`
- `gegenwart/begegnungen/ehfk.html` → `images/gegenwart-begegnungen-ehfk-nastja.jpg`
- `gegenwart/begegnungen/ungewoehnlicher-besucher.html` → zwei fehlende Bilder `...besucher01.jpg` und `...besucher02.jpg`
- `gegenwart/medizin/ukraine-landkarte.html` → `images/gegenwart-medizin-ukraine-landkarte-dolgov.jpg`
- `vergangenheit.html` → `images/jugend.jpeg` (vorhanden ist `images/jugend.jpg`, ohne Aussage, ob dies tatsächlich dasselbe Motiv sein soll)
- `vorlage-geschichte.html` → Platzhalter `images/BILDIMTEXT.jpg`

Die vorhandenen Audioverweise in der Musikseite waren bei der statischen Prüfung auflösbar. Pfade in CSS-`url(...)` wurden zusätzlich anhand der zentralen CSS-Lage betrachtet; die direkt definierten Hauptbilder liegen überwiegend passend im Root-`images`-Ordner. `.schuhe-header` verweist allerdings auf `../images/schuhe-header.jpeg`, eine Datei dieses Namens ist nicht vorhanden und die Klasse wird derzeit in keiner HTML-Datei gefunden.

## 13. Vorschlag für ein einheitliches Zielsystem

Das Ziel sollte keine einzige starre Vorlage für alle Seiten sein, sondern ein gemeinsamer Rahmen mit fünf klaren Seitentypen:

1. **Story-Seite:** gemeinsamer `head`, `.topnav`, Hero, optionaler Hero-Bildhinweis, `article` mit 760-px-Textcontainer, standardisierte Medien, optionales Weiterlesen, Rücklink, gemeinsamer Footer.
2. **Index-/Kachelseite:** gleicher Rahmen, Hero `cover`, Introcontainer, breiteres Kartenraster, Kapitelrücklink.
3. **Haupt-/Raumseite:** gleicher Rahmen, größere Intro- und Raumkarten, aber identische Typografie-Tokens und Navigation.
4. **Musikseite:** gleicher Rahmen plus eigenständiges responsives Songraster und unveränderte Audioelemente.
5. **Sonderseite:** gleicher Rahmen, aber ausdrücklich dokumentierte Inhaltsmodule für Über-mich, Klassenfoto, Personen, Archiv oder Schlussgedanke.

Empfohlene technische Basis:

- zentrale Designwerte für Farben, Schriften, Textbreiten, Abstände, Radien, Schatten und Hero-Höhen,
- ein Hero-Grundbaustein mit Modifiern für `cover`, `contain`, kompakt und ohne Bild,
- ein Textbaustein für Geschichten und ein separater breiter Intro-/Rasterbaustein,
- zentrale `figure`-/`figcaption`-Regeln mit Größenmodifiern statt wiederholter Inline-Styles,
- eine gemeinsame Klasse für Kapitel-/Rücknavigation und eine optionale Weiterlesen-Komponente,
- eine einzige Navigationsstruktur mit identischen Zielen und Bezeichnungen,
- ein einheitlicher Footer,
- relative Pfade weiterhin je Ordnertiefe korrekt setzen; keine pauschale Zeichenkettenersetzung,
- bestehende Inhalte, Überschriften, Titel, Bildunterschriften, Links und Medienpfade bei der Layoutmigration unverändert übernehmen; Pfadkorrekturen als gesonderten, prüfbaren Arbeitsschritt behandeln.

## 14. Sicherer Arbeitsplan in kleinen Schritten

1. **Prüfstand sichern:** eigenen Versionskontrollstand anlegen; Dateiliste und aktuelle Linkprüfung archivieren.
2. **Entscheidungen trennen:** leere Seiten, fehlende Zielseiten/Medien und Archivdateien zunächst nur kennzeichnen, nicht auffüllen oder entfernen.
3. **CSS-Grundlage bereinigen:** Designwerte ergänzen, doppelte `.story-header`-/`.geschichte-text p`-Regeln zusammenführen und fehlende Klassen nur dort definieren, wo ihre Zielbedeutung geklärt ist.
4. **Referenzfamilie pilotieren:** zunächst eine Kopie/kleine Gruppe aus `03-leben-sfo` angleichen; Darstellung bei Desktop, Tablet und Mobil sowie alle Bilder/Links prüfen.
5. **Story-Serien nacheinander:** Studium, Forschung Gießen, San Francisco, Forschung SFO, Kindheit, Jugend, Heidelberg, Berlin und Gegenwart jeweils separat migrieren und nach jeder Serie eine Link-/Medienprüfung ausführen.
6. **Indexseiten separat:** Kachelseiten nicht zusammen mit Story-Seiten bearbeiten; erst gemeinsame Rahmenkomponenten, dann Rastervarianten angleichen.
7. **Neue Designgeneration entscheiden:** `page/site-*`-Seiten entweder bewusst mit vollständigem CSS erhalten oder inhaltstreu auf das gemeinsame System abbilden. Keine Mischlösung mit ungestylten Klassen stehen lassen.
8. **Musikseite isoliert testen:** Bilder, alle Audioquellen, Bedienelemente und Ein-/Zwei-/Dreispaltenansicht prüfen.
9. **Sonderseiten einzeln:** Über-mich, Was-geblieben-ist, Gymnasium/Klassenfoto, Personen, Kontakt, Archiv und Vorlage jeweils mit eigener Checkliste behandeln.
10. **Pfade reparieren:** erst eindeutige Tiefen-/Namensfehler korrigieren; fehlende Inhalte und Medien nur nach Freigabe. Danach vollständigen lokalen Linktest wiederholen.
11. **Inline-Styles abbauen:** ausschließlich mechanische Präsentationswerte in zentrale Klassen überführen; Bildauswahl, Bildunterschriften und Inhalte unverändert lassen.
12. **Abschlussprüfung:** DOM-Grundstruktur, Titel, Überschriften, Textbestand, Links, Bilder, Audio, Pfade, Fokus-/Hoverzustände und mobile Darstellung seitenweise beziehungsweise serienweise vergleichen.

## 15. Prioritäten

- **Priorität 1:** falsche Stylesheet-/Navigationspfade in `archiv/*` und `arbeit-leben/09-berlin/menschen-in-berlin.html`; fehlendes CSS der `page/site-*`-Familie; acht leere HTML-Dateien als bewusste offene Inhalte markieren.
- **Priorität 2:** nicht auflösbare Medien und interne Links; vereinheitlichte Navigation und Footer; klare Trennung von Story- und Indexlayout.
- **Priorität 3:** Inline-Styles, doppelte CSS-Regeln, Bild-/Caption-Varianten und mobile Feinabstimmung.

## 16. Änderungsnachweis

Für diese Analyse wurden keine HTML-, CSS-, JavaScript-, Bild-, Audio- oder Inhaltsdateien im Blogordner verändert oder gelöscht. Angelegt beziehungsweise aktualisiert wurde ausschließlich `LAYOUT-ANALYSE.md`.
