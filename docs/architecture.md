# Architectuur

Nuxt 4 rendert publieke pagina’s server-side met SWR-caching. `server/utils/wordpress.ts` is de centrale WordPress-client. Publieke pagina’s en posts komen uit de WordPress REST API; bij uitval retourneert de interne API gecontroleerde lege resultaten en blijven de redactioneel gemarkeerde ontwikkelfallbacks bruikbaar.

De plugin in `wordpress/innerkracht-headless.php` registreert `service`, `testimonial` en `faq`. In productie horen homepage- en contactopties bij voorkeur in een gratis ACF Options-alternatief of op een vaste WordPress-pagina; ACF Pro is niet vereist. Alleen gepubliceerde content en expliciet geregistreerde metadata zijn publiek.

Contact gebruikt servervalidatie, honeypot en IP-rate limiting. De leveringsadapter is bewust niet gefingeerd: koppel de bestaande WordPress mailconfiguratie via een beveiligd REST-endpoint voordat productie wordt vrijgegeven.

De lokale bestanden in `app/data/fallback.ts` zijn uitsluitend een development-fallback en geen tweede CMS.
