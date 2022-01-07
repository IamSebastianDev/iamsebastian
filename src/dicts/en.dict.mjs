/** @format */

export default {
	cookie: {
		description: `Hey! This site uses Javascript, the
        <a
            href="https://en.wikipedia.org/wiki/Web_storage"
            rel="norefferer nofollow"
            >Local Storage of your Browser</a
        >
        as well as Cookies to work correctly. You can read more about
        that in the
        <a href="./privacy.html">Privacy Policy</a>.`,
		confirm: 'Got it!',
	},
	nav: {
		contact: 'Get in touch.',
		about: 'About Me',
	},
	tagline: {
		one: 'I',
		two: 'am',
		three: 'A freelance Webdeveloper from Munich.',
		scroll: 'Scroll down to find out more',
	},
	contact: {
		heading: 'Get in touch!',
		email: 'Your Emailadress',
		message: 'Your Message',
		submit: 'Submit <span id="contact-submit-spinner" state="false"></span>',
		success: '',
		descriptor: `If you're not quite sure what I can do for you, take a look at some of my <a href="#portfolio">previous work</a> below.`,
	},
	about: {
		heading: 'About me:',
		text: `<p>
		Hey, nice to meet you. My name is Sebastian and I am
		a fullstack webdeveloper & designer based in Munich,
		Germany. I have been teaching myself how to code
		since 2017.
	</p>
	<p>
		I love to design minimal and monochromatic websites
		that use modern code & frameworks to get the best
		perfomance possible. I also love creating solutions
		for just about every problem you can think of.
	</p>
	<p>
		Here are some of the technologies I have worked 
		and experienced with:
	</p>
	<p class="about-techstack">
		HTML5 // CSS3 // JavaScript(Es6+) // Node.js //
		Express.js // SvelteKit // Heroku // Scriptable.io
	</p>`,
	},
	portfolio: {
		heading: 'Some of my creations:',
		pangolicons: `A modern & minimal SVG icon library with a
		simple api. All icons are fully customizable.
		The backend is powered by a custom build
		compiler, that generates the library out of
		available svgs, complete with tags.`,
		krankenhausampel: `A website in a neumorphism design that provides a dashboard for the metrics of the bavarian healthsystem in relation to the Covid-19 pandemic. The website uses a custom-built, opensource API.`,
		vay: `Vay.js is a lightweight & dependency free, framework agnostic i18n provider built with modern Javascript. It features a fullfledged API for static and dynamic content, plurals and more. Vay.js is also what powers this websites i18n.`,
		photography: `A photography site that puts the talent of the
		artist in the foreground. The design is sleek
		and minimal to avoid distractions from the UI. A
		custom build CMS solution that feeds the
		frontend via an API completes the project.`,
		simplipsum: `simpLipsum is a simple "Lorem Ipsum" generator, that exposes a free restful API to the internet. It can be used to generate placeholder text on demand. The look of the website was heavily influenced by a typesetting theme, visible in the font and muted colors.`,
		flatshadow: `FlatShadow.js is a minimal JS library that can be used to create stylistic shadows on webpages. The library features a simple attribute based API that can be easily configured. FlatShadow.js is dependency free and available under a MIT license.`,
		watcherbot: `WatcherBot is a small node.js library that can be used to monitor changes or actions on a website within a set interval. It also features a "interessting" API.`,
		qarri: `A simple, static website built for a local cleaning service. The design follows a simple brutalistic principle with bold and direct colours.`,
	},
	form: {
		success: 'Success!',
		failure: `Uhoh! Something went wrong. You can try again or mail to: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a>. Sorry about that!`,
		thanks: `Hey, thanks for getting in touch! I'll get back to you as soon as possible!`,
		timeout: `Oh boy, something is not quite right with the Server, it timed out. You can try again or mail to: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a>. Sorry about that! `,
		validation: {
			emailIncorrect: `Please enter a valid email.`,
			messageToShort: `Please send a longer text.`,
		},
	},
};
