# Contentinventaris Innerkracht

Audit uitgevoerd op 26 juli 2026 via de publieke website en WordPress REST API.

| URL | Titel | Hoofdinhoud | Afbeeldingen / CTA | Migratie |
|---|---|---|---|---|
| `/` | Home | “Heel, Verlicht, Breng Balans”; introductie; uitleg hypnose; vijf hulpgebieden | `leaf.jpg`, `service-1/2/3.jpg`; Contact | Tekst en media automatisch beschikbaar via WP |
| `/over-tom/` | Over Tom | Persoonlijk verhaal, Reiki, familieopstellingen, ademwerk, zelfhypnose, NLP en Havening | [CLIENT TO CONFIRM: portret ontbreekt in bruikbare auditdata] | Tekst migreerbaar |
| `/hypnotherapie/` | Hypnotherapie | Hypnotherapie, regressietherapie, parts-therapie, sessie-ervaring | CTA naar contact | Tekst migreerbaar |
| `/contact/` | Contact | Werkwijze intake, duur, prijs, annulering, formulier en contactdata | Contactformulier | Gegevens migreerbaar; mail-endpoint bevestigen |
| `/sample-page/` | Sample Page | Standaard WordPress voorbeeldtekst | Geen | Verwijderen/niet indexeren |

## Geverifieerde contactgegevens

- Tom Bracke
- `Tom@innerkracht.be`
- `0477 25 37 11`
- Grotenbroekstraat 21, 9800 Gavere
- Prijs op bestaande site: €140 per sessie
- Duur op bestaande site: 1,5 tot 2 uur
- Annulering: minder dan 48 uur vooraf via mail wordt aangerekend

## Navigatie en footer

Huidige navigatie: Home, Over Tom, Hypnotherapie, Contact. De footer toont opnieuw deze links en “Love Nature by Tyler Moore”, vermoedelijk restinhoud van een template. Een zichtbaar nummer `202-555-0188` is eveneens template-inhoud en mag niet worden gemigreerd.

## Inhoudelijke aandachtspunten

- De homepage noemt “1 tot 4 sessies” en “blijvend effect”. Dit zijn sterke resultaatclaims; juridisch en inhoudelijk laten bevestigen.
- Er zijn geen verifieerbare testimonials aangetroffen; daarom zijn geen ervaringen gefabriceerd.
- De WordPress posts-feed bevat alleen standaard/lege inhoud; blog wordt technisch voorbereid maar niet gevuld.
- Sociale iconen worden genoemd, maar de daadwerkelijke profiel-URL’s waren niet betrouwbaar uit de audit af te leiden: `[CLIENT TO CONFIRM]`.
- Het huidige logo is alleen als witte SVG aangetroffen. Het ontwerp gebruikt voorlopig een tekstmerk; lever een definitief logo voor productie.
- Alt-teksten zoals “leaf” en “service 1” zijn zwak en moeten in de mediabibliotheek worden verbeterd.
- Privacy-, cookie- en eventuele disclaimerteksten: `[CLIENT TO CONFIRM / LEGAL REVIEW]`.

## Aanbevolen structuur

Home · Aanbod · Over mij · Werkwijze · Ervaringen · Inzichten · Veelgestelde vragen · Contact · Privacybeleid · Cookiebeleid. De bestaande URL’s `/over-tom/` en `/hypnotherapie/` krijgen redirects.

## Ontwerpreferentie

De referentie `murielgrooten.be` gebruikt grote editoriale koppen, ritmische fotografie, directe hulpvragen, genummerde herkenningspunten en rustige CTA’s. Innerkracht neemt die helderheid over, maar gebruikt een eigen bosgroen/klei-kleurpalet, eigen composities en duidelijker taakgerichte navigatie.
