/** @format */

export default {
	cookie: {
		description: `Hey! Diese Website benutzt Javascript und den <a
            href="https://en.wikipedia.org/wiki/Web_storage"
            rel="norefferer nofollow"
            >Lokalen Speicher deines Webbrowsers</a
        > sowie manchmal Cookies um zu funtkionieren. Du kannst mehr über deren Funktion in unserer <a href="./privacy.html">Privacy Policy</a> erfahren.`,
		confirm: 'Alles klar!',
	},
	nav: {
		contact: 'Schreib mir.',
		about: 'Über mich',
	},
	tagline: {
		one: 'Ich',
		two: 'bin',
		three: 'Ein Webdeveloper aus München.',
		scroll: 'Scroll nach unten, um mehr zu sehen',
	},
	contact: {
		heading: 'Schreib mir!',
		email: 'Deine Emailadresse',
		message: 'Deine Nachricht',
		submit: 'Abschicken! <span id="contact-submit-spinner" state="false"></span>',
		descriptor: `Wenn du dir nicht ganz sicher bist, ob wir zueinander passen, schau dir meine <a href="#portfolio">bisherige Arbeit</a> an.`,
	},
	about: {
		heading: 'Über mich:',
		text: `<p>
		Hey, schön dich kennen zu lernen! Ich bin Sebastian, ein freischaffender Fullstack Web-developer aus München. Ich code seit 2017.
	</p>
	<p>
		Meine Leidenschaft ist das designen von monochromatischen, minimalistischen Webseiten, die modernen Code & Frameworks benutzen um die bestmögliche Perfomance zu erhalten. Außerdem liebe ich es Lösungen für jede Art von Problemen zu finden.
	</p>
	<p>
		Hier sind einige der Technologien mit denen ich in letzter Zeit gearbeitet habe:
	</p>
	<p class="about-techstack">
		HTML5 // CSS3 // JavaScript(Es6+) // Node.js //
		Express.js // SvelteKit // Heroku // Scriptable.io
	</p>`,
	},
	portfolio: {
		heading: 'Einige meiner Werke:',
		pangolicons: `Eine moderne & minimale SVG-Icon Library mit einer einfachen API. Alle Icons sind vollständig personalisierbar. Das Backend benutzt einen custom-built Compiler um die Library aus den verfügbaren SVGs inklusive deren Tags zu generieren.`,
		krankenhausampel: `Die Krankenhausampel gibt einen Überblick über die Auslastung des Gesundheitssystems in Bayern. Die Webseite, die in einem neumorphem Design gehalten ist, benutzt eine eigene RESTApi, die die Daten mittels crawling generiert.`,
		vay: `Vay.js ist ein minimaler & moderner, framework-unabhängiger i18n provider. Vay's API umfasst statischen und dynamischen Inhalt, sowie Möglichkeiten für Pluralisierungen und mehr. Dieses Portfolio benutzt Vay.js`,
		photography: `Ein Fotografieportfolio, das die Bilder des Fotografen in den Vordergrund stellt. Die Webseite ist in einem minimalen und leichten Design gehalten, um Ablenkungen durch die UI zu vermeiden. Das Backend ist ein minimales, custom CMS. `,
		simplipsum: `SimpLipsum ist ein einfacher "Lorem Ipsum" Generator, der mithilfe einer simplen RESTApi angesprochen werden kann. Das Aussehen der Webseite ist einem Schreibmaschinenlook nachempfunden, erkenntlich an der Schriftart und dem stimmigen Farbkonzept.`,
		flatshadow: `FlatShadow.js ist eine JS-Library, die benutzt werden kann, um stylistische Schatten auf Webseiten zu erzeugen. Die Library hat eine simple, attributbasierende API, die einfach konfiguriert werden kann.`,
		watcherbot: `WatcherBot ist eine Node.js-Library, die dazu benutzt werden kann, eine beliebige Webseite regelmäßig aufzurufen und auf ändernung zu Überprüfen. Eine "Interesante" API rundet die Library ab.`,
		qarri: `Eine simple statische Webseite für ein lokales Unternehmen, gehalten in einem simplen, bruatlistischen Design.`,
	},
	form: {
		success: 'Erfolg!',
		failure: `Uhoh! Irgendwas hat nicht geklappt. Du kannst mir deine Nachricht auch direkt an: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a> schicken.`,
		thanks: `Hey, danke für deine Nachricht. Ich melde mich schnellstmöglichst zurück!`,
		timeout: `Uhoh! Der Server hat zulange für die Antwort gebraucht. Du kannst mir deine Nachricht auch direkt an: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a> schicken. `,
		validation: {
			emailIncorrect: `Bitte gib eine vollständige Emailadresse ein.`,
			messageToShort: `Deine Nachricht sollte länger als 10 zeichen sein.`,
		},
	},
};
