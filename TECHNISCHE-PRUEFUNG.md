# Technische Prüfung der Lebensreise-Kopie

Prüfdatum: 15. Juli 2026  
Projektordner: `/Users/lotharschweigerer/Desktop/Lebensreise Kopie`

## 1. Sicherungspunkt

Vor Beginn der technischen Prüfung wurde der lokal visuell geprüfte Stand in Git gesichert.

- Commit: `9acc5cd`
- Commit-Nachricht: `Sicherungspunkt nach visueller Layoutprüfung`
- Enthalten: die visuell geprüfte `style.css` und `LAYOUT-ANALYSE.md`

Die nachfolgenden Prüfungen waren ausschließlich lesend. Es wurden keine HTML-Dateien und keine bestehenden Pfade korrigiert.

## 2. Prüfung der `style.css`

Geprüft wurden:

- geschlossene Kommentare und Zeichenketten,
- ausgeglichene geschweifte, runde und eckige Klammern,
- leere oder offensichtlich fehlerhaft zusammengesetzte Selektoren,
- Deklarationen ohne Doppelpunkt,
- Abdeckung aller in den HTML-Dateien verwendeten Klassen.

Ergebnis:

- 1.635 CSS-Zeilen,
- 250 erkannte Regelblöcke,
- keine unausgeglichenen Klammern,
- keine nicht geschlossenen Kommentare oder Zeichenketten,
- keine offensichtlich ungültigen Selektoren,
- keine offensichtlich unvollständigen Deklarationen,
- alle 81 in den HTML-Dateien gefundenen Klassen besitzen mindestens eine CSS-Regel.

Hinweis: In Zeile 754 befindet sich ein nachgestelltes Leerzeichen in einer Kommentarzeile. Dies ist kein Syntaxfehler und beeinflusst die Darstellung nicht. Es wurde entsprechend dem Auftrag nicht korrigiert.

## 3. Umfang der Pfadprüfung

Statisch geprüft wurden:

- alle lokalen `href`-Attribute,
- alle lokalen `src`-Attribute,
- alle `url(...)`-Angaben in `style.css`,
- alle `url(...)`-Angaben in Inline-Styles der HTML-Dateien,
- Pfade mit Query-Strings wie `style.css?v=10` nach Entfernung des Cache-Parameters,
- relative Pfade jeweils ausgehend vom tatsächlichen Speicherort der Quelldatei.

Externe HTTP-/HTTPS-Adressen, `mailto:`, sonstige URI-Schemata und reine Ankerlinks wurden nicht als lokale Dateien behandelt.

Gesamtergebnis:

- 2.574 geprüfte lokale Referenzen,
- 2.472 vorhandene Ziele,
- 102 nicht auflösbare Referenzen.

Die 102 Fundstellen sind nicht gleichbedeutend mit 102 verschiedenen Fehlern: Mehrere fehlende Ziele werden von mehreren Seiten verlinkt, und Dateien mit falscher Ordnertiefe erzeugen jeweils mehrere fehlerhafte Navigationslinks.

## 4. Eindeutige Pfadfehler

### 4.1 Falsche Ordnertiefe in `arbeit-leben/09-berlin/menschen-in-berlin.html`

Die Datei liegt zwei Ebenen unterhalb des Hauptordners, verwendet aber für Stylesheet und Hauptnavigation nur `../`.

Nicht auflösbare Verweise:

- `../style.css?v=10`
- `../index.html`
- `../kindheit.html`
- `../jugend.html`
- `../arbeit-leben.html`
- `../gegenwart.html`
- `../was-geblieben-ist.html`
- `../musik.html`
- `../kontakt.html`

Für die meisten Hauptordnerziele wäre von dieser Datei aus eine Ebene mehr (`../../`) erforderlich. Der Musiklink hat zusätzlich einen nicht vorhandenen Dateinamen; im Hauptordner existiert `songs.html`, nicht `musik.html`.

### 4.2 Falsche Ordnertiefe in Archivseiten

Diese Dateien liegen direkt unter `archiv/`, verwenden aber für Stylesheet, Navigation und teilweise Bilder `../../../`:

- `archiv/jeden-morgen-um-acht.html`
- `archiv/kinderklinik.html`
- `archiv/kinderklinik-besprechungskunst-alt.html`

Betroffen sind jeweils:

- `../../../style.css`
- `../../../index.html`
- `../../../kindheit.html`
- `../../../jugend.html`
- `../../../arbeit-leben.html`
- `../../../gegenwart.html`
- `../../../was-geblieben-ist.html`
- `../../../songs.html`
- `../../../kontakt.html`

Von `archiv/` aus wäre für Dateien im Hauptordner grundsätzlich `../` die passende Tiefe. Bilder dieser Seiten sind zusätzlich gesondert unter „Fehlende Medien“ und „Archivdateien“ aufgeführt, weil dort nicht nur die Tiefe, sondern teils auch der Unterordner abweicht.

### 4.3 Eindeutig abweichende vorhandene Dateinamen

- `arbeit-leben.html` verlinkt `arbeit-leben/05-marburg/index.html`; vorhanden ist `arbeit-leben/06-marburg/index.html`.
- `was-geblieben-ist.html` verlinkt `musik.html`; im Hauptordner vorhanden ist `songs.html`.
- `vergangenheit.html` lädt `images/jugend.jpeg`; vorhanden ist `images/jugend.jpg`. Die unterschiedliche Erweiterung verhindert die Auflösung auf Dateisystemen mit exakter Namensprüfung.

### 4.4 CSS-Pfad ohne vorhandenes Ziel

In `style.css` verweist die Klasse `.schuhe-header` auf:

- `../images/schuhe-header.jpeg`

Die CSS-Datei liegt bereits im Hauptordner; `../images` zeigt daher außerhalb des Projekts. Im Projekt existiert zudem nicht `schuhe-header.jpeg`, sondern `images/kindheit-schuhe-header.jpg`. Die Klasse `.schuhe-header` wird aktuell in keiner HTML-Datei gefunden, weshalb der Fehler bei den geprüften Seiten gegenwärtig wahrscheinlich nicht sichtbar wird.

## 5. Fehlende, aber vermutlich noch nicht erstellte Seiten

Diese Links wirken überwiegend wie geplante Geschichten oder bewusst vorbereitete Indexeinträge. Sie wurden nicht als reine Tippfehler eingestuft und nicht korrigiert.

### 5.1 San Francisco

- `arbeit-leben/03-leben-sfo/03-leben-sfo-joosten-clan.html` – aus dem Index sowie aus `03-leben-sfo-kfog.html` und `03-leben-sfo-fillmore.html` verlinkt
- `arbeit-leben/03-leben-sfo/03-leben-sfo-washington.html`
- `arbeit-leben/03-leben-sfo/03-leben-sfo-rv-reise.html`

### 5.2 Heidelberg – Klinik

Vom Index `arbeit-leben/05-heidelberg/klinik/index.html` verlinkt, am erwarteten Ort aber nicht vorhanden:

- `jeden-morgen-um-acht.html`
- `aus-fehlern-lernen.html`
- `h10.html`
- `so-wollte-ich-nie-chef-werden.html`

Hinweis: Eine Datei `archiv/jeden-morgen-um-acht.html` existiert, ist wegen ihres Archivstatus aber nicht automatisch als Zielersatz anzusehen.

### 5.3 Heidelberg – Begegnungen

Vom Index `arbeit-leben/05-heidelberg/begegnungen/index.html` verlinkt, aber nicht vorhanden:

- `manfred-schwab.html`
- `achim-wenzel.html`
- `lukas-amler.html`
- `andreas-habenicht.html`
- `peter-nawroth.html`
- `rolf-ludwig.html`
- `verena-bier.html`
- `dietrich-schoenberg.html`
- `jochen-troeger.html`
- `hansjoerg-seyberth.html`
- `uwe-querfeld.html`
- `karl-paul.html`
- `georg-hoffmann.html`
- `musa-kockaya.html`
- `ertan-mayatepek.html`
- `ursula-felderkamp-mueser.html`
- `katja-becker.html`
- `antonia-joussen.html`
- `angelika-eggert.html`
- `juergen-magsaam.html`
- `dieter-sontheimer.html`
- `emmy-koenemge.html`
- `christian-benninger.html`
- `gerda-mittermeier.html`
- `fritz-trefz.html`
- `konrad-schaerer.html`
- `otto-mehls.html`
- `otwin-linderkamp.html`

### 5.4 Jugend, Kindheit und Berlin

- `jugend/jugend-gymnasium-hauptgewinn.html` – aus `jugend-beral.html` und `jugend-gymnasium-gute-schueler.html` verlinkt
- `kindheit/kindheit-kreidler-vater.html` – aus `kindheit-locken.html` und `kindheit-wallfahrten.html` verlinkt
- `arbeit-leben/09-berlin/elternoase.html` – aus `kindergarten.html` verlinkt

## 6. Fehlende Medien

### 6.1 Reguläre Inhalts- und Headerbilder

- `arbeit-leben/01-studium-giessen/01-studium-giessen-spanien.html` → `images/studium-giessen-spanien-header.jpg`
- `arbeit-leben/03-leben-sfo/03-leben-sfo-ulli.html` → `images/leben-sfo-ulli.jpg`
- `arbeit-leben/03-leben-sfo/03-leben-sfo-ulli.html` → `images/leben-sfo-ulli-header.jpg`
- `arbeit-leben/09-berlin/begegnungen/geschaeftsfuehrer.html` → `images/berlin/portraits/gerrit-schwind.jpg`

### 6.2 Gegenwartsseiten

- `gegenwart/medizin/mira.html` → `images/gegenwart-medizin-mira-header.jpg`
- `gegenwart/medizin/ukraine-landkarte.html` → `images/gegenwart-medizin-ukraine-landkarte-dolgov.jpg`
- `gegenwart/medizin/ukraine-landkarte.html` → `images/gegenwart-medizin-ukraine-landkarte-header.jpg`
- `gegenwart/begegnungen/ehfk.html` → `images/gegenwart-begegnungen-ehfk-nastja.jpg`
- `gegenwart/begegnungen/ehfk.html` → `images/gegenwart-begegnungen-ehfk-header.jpg`
- `gegenwart/begegnungen/ungewoehnlicher-besucher.html` → `images/gegenwart-begegnungen-ungewoehnlicher-besucher01.jpg`
- `gegenwart/begegnungen/ungewoehnlicher-besucher.html` → `images/gegenwart-begegnungen-ungewoehnlicher-besucher02.jpg`
- `gegenwart/begegnungen/ungewoehnlicher-besucher.html` → `images/gegenwart-begegnungen-ungewoehnlicher-besucher-header.jpg`

Im Projekt existieren ähnlich benannte Medien unter `images/berlin/header/` und `images/berlin/inhalt/`. Es wurde bewusst nicht unterstellt, dass diese Dateien inhaltlich die richtigen Ersatzmedien für die Gegenwartsseiten sind.

### 6.3 Platzhalter der Vorlage

`vorlage-geschichte.html` verweist erwartungsgemäß auf nicht vorhandene Platzhalter:

- `images/BILDIMTEXT.jpg`
- `images/HEADERBILD.jpg`

Diese Einträge sind keine Fehler einer veröffentlichten Geschichte, sondern müssen beim Erstellen einer Seite aus der Vorlage ersetzt werden.

### 6.4 Archivmedien

In den Archivdateien fehlen beziehungsweise passen die angegebenen Orte nicht:

- `archiv/jeden-morgen-um-acht.html` → `images/heidelberg/header/jeden-morgen-um-acht-header.jpg`
- `archiv/kinderklinik.html` → `images/heidelberg/header/kinderklinik-header.jpg`
- `archiv/kinderklinik-besprechungskunst-alt.html` → `images/heidelberg/kinderklinik-besprechungskunst.jpg`
- `archiv/kinderklinik-besprechungskunst-alt.html` → `images/heidelberg/header/kinderklinik-besprechungskunst-header.jpg`

Für die Besprechungskunst existieren ähnlich benannte Dateien unter `images/heidelberg/inhalt/` und `images/heidelberg/header/`. Der im HTML angegebene Inhaltspfad nennt jedoch nicht den Unterordner `inhalt`, und alle Archivpfade verwenden zusätzlich eine falsche Ordnertiefe. Keine automatische Zuordnung wurde vorgenommen.

## 7. Leere HTML-Dateien

Folgende acht Dateien haben eine Größe von 0 Byte. Sie besitzen deshalb weder HTML-Grundstruktur noch Inhalte oder Pfade:

- `gegenwart/medizin/ki-in-der-medizin.html`
- `gegenwart/medizin/telemedizin.html`
- `gegenwart/begegnungen/100-geburtstag.html`
- `gegenwart/begegnungen/herr-kollege.html`
- `gegenwart/beobachtungen/homeexchange.html`
- `gegenwart/beobachtungen/reisen.html`
- `gegenwart/beobachtungen/ki-im-alltag.html`
- `gegenwart/beobachtungen/doppelt-bestraft.html`

Sie wurden nicht verändert oder mit erfundenen Inhalten gefüllt.

## 8. Archivdateien mit Sonderbehandlung

Im Ordner `archiv/` befinden sich fünf HTML-Dateien:

- `archiv/geburt-leben-tod.html`
- `archiv/linkedin.html`
- `archiv/jeden-morgen-um-acht.html`
- `archiv/kinderklinik.html`
- `archiv/kinderklinik-besprechungskunst-alt.html`

Einordnung:

- `geburt-leben-tod.html` und `linkedin.html` verwenden die neuere `page/site-*`-Layoutgeneration. Ihre bei dieser Prüfung erfassten lokalen Pfade sind auflösbar.
- `jeden-morgen-um-acht.html` und `kinderklinik.html` verwenden die klassische Struktur, aber eine für ihren tatsächlichen Speicherort falsche Pfadtiefe. Beide verlinken außerdem `archiv/index.html`, das nicht existiert.
- `kinderklinik-besprechungskunst-alt.html` ist ausdrücklich als Altversion benannt. Neben der falschen Pfadtiefe weicht auch der angegebene Bildordner vom vorhandenen Medienbestand ab.

Empfehlung für einen späteren Korrekturschritt: Vor jeder Pfadänderung festlegen, ob Archivseiten weiterhin direkt navigierbar sein sollen, ob ein eigener Archivindex entstehen soll und ob die Altversion lediglich erhalten oder aktiv verlinkt werden soll. Archivdateien sollten nicht zusammen mit regulären Produktionsseiten pauschal umgeschrieben werden.

## 9. Nicht als Fehler gewertete Fälle

- Externe Google-Font-Adressen und andere externe URLs wurden nicht lokal aufgelöst.
- Reine Anker und `#`-Platzhalter wurden nicht als fehlende Dateien gewertet.
- Query-Strings wie `?v=10` und `?v=11` wurden als Cache-Parameter behandelt; die zugrunde liegende `style.css` ist vorhanden.
- Vorhandene Audioverweise waren bei der statischen Prüfung auflösbar.
- Ähnlich benannte Medien wurden nicht automatisch als Ersatz für fehlende Dateien angenommen.

## 10. Änderungsnachweis

Nach dem Sicherungspunkt wurden keine HTML-, CSS-, JavaScript-, Bild- oder Audiodateien verändert. Es wurden keine Pfade korrigiert und keine fehlenden Inhalte ergänzt. Als einzige neue Datei wurde dieser Bericht `TECHNISCHE-PRUEFUNG.md` angelegt.
