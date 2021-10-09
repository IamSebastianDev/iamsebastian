/** @format */

// i18n

// import the provider & dicts

import { Vay } from './vay.min.js';
import en from './dicts/en.dict.mjs';
import de from './dicts/de.dict.mjs';

// create the provider

const i18n = new Vay({ dictionaries: { en, de } });
i18n.render();

// controls
const langSelector = {
	de: document.querySelector("[language='de']"),
	en: document.querySelector("[language='en']"),
};

window.addEventListener('DOMContentLoaded', (ev) => {
	// current language;
	const current = i18n.currentLanguage;
	// set the language button active to equal to the language
	langSelector[current].classList.add('i18n-selector-active');
});

langSelector.de.addEventListener('click', (ev) => {
	i18n.currentLanguage = ev.target.getAttribute('language');
});

langSelector.en.addEventListener('click', (ev) => {
	i18n.currentLanguage = ev.target.getAttribute('language');
});

// import the custom PortfolioCard component

import { PortfolioCard } from './components/PortfolioCard.component.mjs';
import { PortfolioGrid } from './components/PortfolioGrid.component.mjs';

// the Data for the PortfolioCards

const portfolioPieces = [
	{
		heading: 'Pangolicons',
		tech: 'JS, Node.js, NPM',
		image: './assets/image/thumbnail_pangolicons.jpg',
		alt: 'thumbnail for a icon library website',
		description: i18n.translate('portfolio.pangolicons'),
		links: {
			website: {
				href: 'https://pangolicons.herokuapp.com',
				icon: Pangolicons.icons.convertToLink,
			},
			github: {
				href: 'https://github.com/IamSebastianDev/pangolicons',
				icon: Pangolicons.icons.github,
			},
			npm: {
				href: 'https://www.npmjs.com/package/pangolicons',
				icon: Pangolicons.icons.convertToLink,
			},
		},
	},
	{
		heading: 'Krankenhausampel Bayern',
		tech: 'JS, Node.js, Puppeteer, API',
		image: './assets/image/thumbnail_krankenhausampel.jpg',
		alt: 'thumbnail for a healthcare website',
		description: i18n.translate('portfolio.krankenhausampel'),
		links: {
			website: {
				href: 'https://krankenhausampelbayern.de',
				icon: Pangolicons.icons.convertToLink,
			},
			github: {
				href: 'https://github.com/IamSebastianDev/ampeldashboardbayern',
				icon: Pangolicons.icons.github,
			},
		},
	},
	{
		heading: 'Vay.js',
		tech: 'JS, Node.js',
		image: './assets/image/thumbnail_default.jpg',
		alt: 'thumbnail depicting the github octocat.',
		description: i18n.translate('portfolio.vay'),
		links: {
			github: {
				href: 'https://github.com/IamSebastianDev/vay.js',
				icon: Pangolicons.icons.github,
			},
		},
	},
	{
		heading: 'Sabi Photography',
		tech: 'JS, Custom designed CMS, API',
		image: './assets/image/thumbnail_photography.jpg',
		alt: 'thumbnail for a photography website',
		description: i18n.translate('portfolio.photography'),
		links: {
			website: {
				href: 'https://sabrinawanninger.de',
				icon: Pangolicons.icons.convertToLink,
			},
		},
	},
	{
		heading: 'simpLipsum',
		tech: 'JS, Node.js, API',
		image: './assets/image/thumbnail_simplipsum.jpg',
		alt: 'thumbnail for a typography page',
		description: i18n.translate('portfolio.simplipsum'),
		links: {
			website: {
				href: 'https://simplipsum.vercel.app',
				icon: Pangolicons.icons.convertToLink,
			},
			github: {
				href: 'https://github.com/IamSebastianDev/simpLipsum.dev',
				icon: Pangolicons.icons.github,
			},
		},
	},
	{
		heading: 'FlatShadow.js',
		tech: 'JS',
		image: './assets/image/thumbnail_flatshadow.jpg',
		alt: 'thumbnail for a javascript library with beatiful shadows.',
		description: i18n.translate('portfolio.flatshadow'),
		links: {
			website: {
				href: 'https://flatshadow.vercel.app',
				icon: Pangolicons.icons.convertToLink,
			},
			github: {
				href: 'https://github.com/IamSebastianDev/flatShadow.js',
				icon: Pangolicons.icons.github,
			},
		},
	},
];

// Create the PortfolioCards

const renderPortfolio = () => {
	const slider = document.querySelector('.portfolio-slider');

	[...slider.childNodes].forEach((node) => node.remove());

	portfolioPieces
		.slice(0, 3)
		.forEach((piece) => new PortfolioCard(piece).render(slider));

	const grid = document.querySelector('.portfolio-grid');

	[...grid.childNodes].forEach((node) => node.remove());

	portfolioPieces
		.slice(3)
		.forEach((piece) => new PortfolioGrid(piece).render(grid));
};

renderPortfolio();

window.addEventListener('languageHasChanged', (ev) => {
	i18n.render();
	renderPortfolio();

	// current language;
	const current = i18n.currentLanguage;

	let notCurrent = current == 'de' ? 'en' : 'de';

	// set the language button active to equal to the language
	langSelector[current].classList.add('i18n-selector-active');
	langSelector[notCurrent].classList.remove('i18n-selector-active');
});

// Cookie controls

// Cookie elements
const CookieBanner = document.querySelector('.cookie');
const CookieConfirm = document.querySelector('#cookie-confirm');

// on window load, check if the cookie modal should be shown depeding on if the cookieSeen flag in local Storage has been set

window.addEventListener('load', (ev) => {
	// Check the cookie state saved in local storage
	const CookieSeen = localStorage.getItem('cookieSeen');

	if (!CookieSeen) {
		CookieBanner.setAttribute('cookie-visible', true);
	}
});

// create the Ev Listener on the confirm Button

CookieConfirm.addEventListener('click', (ev) => {
	// set the localStorage flag

	localStorage.setItem('cookieSeen', true);

	// disappear the cookie modal
	CookieBanner.setAttribute('cookie-visible', false);
});

// handle the scroll hint disaperenace

window.addEventListener('scroll', (ev) => {
	if (window.pageYOffset > window.innerHeight / 2) {
		const Scrollhint = document.querySelector('.scroll-hint');

		Scrollhint.style.opacity = '0';

		window.setTimeout(() => {
			Scrollhint.style.display = 'none';
		}, 1000);
	}
});

// handle the burger button menu switch
const Switch = document.querySelector('.nav-burger');
const Menu = document.querySelector('nav ul');

Switch.addEventListener('click', (ev) => {
	// get the state of the menu
	let state = Menu.getAttribute('state');

	if (state == 'closed' || state == undefined) {
		Menu.setAttribute('state', 'open');
		document.body.style.overflowY = 'hidden';
	} else if (state == 'open') {
		Menu.setAttribute('state', 'closed');
		document.body.style.overflowY = '';
	}
});

window.addEventListener('hashchange', (ev) => {
	Menu.setAttribute('state', closed);
	document.body.style.overflowY = '';
});

// handle the contact form

// Formelements
const Submit = document.querySelector('#contact-submit');
const Form = document.querySelector('.contact-form');

// get all the form Elements to validate
const Email = Form.querySelector('#email');
const Message = Form.querySelector('#message');

// ValidateForm is a function that checks the Email & Message fields for valid content, and returns an array with the state of the validation to be parsed by the submit function

const ValidateForm = (Email, Message) => {
	let validated = [];

	// check the Email input for not being empty and containg atleast one @ symbol and one period. Further validiton will bre reported by the API on deliverabilty.

	if (Email.value.includes('@') && Email.value.includes('.')) {
		validated.push({ elem: Email, valid: true });
	} else {
		validated.push({
			elem: Email,
			valid: false,
			msg: 'Your Emailaddress appears to be incorrect.',
		});
	}

	// check the message value length to be longer then 10 characters.
	if (Message.value.length > 10) {
		validated.push({ elem: Message, valid: true });
	} else {
		validated.push({
			elem: Message,
			valid: false,
			msg: 'Please enter a longer text into the message field.',
		});
	}

	return validated;
};

// the SetValidation function will take an array of validated fields, itterate over them, and handle the necessary modifications and actions

const SetValidation = (validatedFields) => {
	// itterate over the fields
	validatedFields.forEach((field) => {
		// for each field, check if the field is valid, if yes, return early
		if (field.valid) {
			return;
		}

		// if the field is not valid, display the validation message on the correct sibling element, and add event listeners for reset of the element

		field.elem.setAttribute('state', false);
		let validationNotice = field.elem.nextElementSibling;

		validationNotice.textContent = field.msg;
		validationNotice.setAttribute('state', true);

		// add the reset ev listener to the element

		const resetField = () => {
			field.elem.removeEventListener('click', resetField);
			field.elem.setAttribute('state', true);
			validationNotice.textContent = '';
			validationNotice.setAttribute('state', false);
		};

		field.elem.addEventListener('click', resetField);
	});
};

// the function to submit the message
const SubmitMessage = () => {
	// when the submit function is called, begin the sending process by making the spinner inside the submit button visible

	const Spinner = Submit.querySelector('#contact-submit-spinner');

	Spinner.setAttribute('state', true);

	// start the timeout function in case no response from the server comes
	const timeoutFunction = () => {
		Spinner.setAttribute('state', false);
		Form.nextElementSibling.innerHTML =
			"Uhoh! Something went wrong. You can try again or mail to: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a>. Sorry about that!";
	};

	const ServerTimeout = window.setTimeout(timeoutFunction, 10000);

	// gather all values and validate the Fields
	const validatedFields = ValidateForm(Email, Message);
	SetValidation(validatedFields);

	// check the validatedFields array for false values
	const validationChecked = validatedFields.map((field) => field.valid);

	// if the array contains a false value, return early and reset the spinner

	if (validationChecked.some((field) => field == false)) {
		Spinner.setAttribute('state', false);

		return;
	}

	// composing the JSON element for the POST fetch

	const Payload = JSON.stringify({
		email: Email.value,
		message: Message.value,
	});

	const DispatchMessage = async (payload) => {
		// begin a async post fetch call to the api
		const response = await fetch('./handleMail', {
			method: 'POST',
			body: payload,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();

		if (result.success) {
			window.clearTimeout(ServerTimeout);
			Spinner.setAttribute('state', false);
			Submit.textContent = 'Success!';
			Submit.disabled = true;

			Form.nextElementSibling.textContent =
				"Hey! Thanks for getting in touch! I'll make sure to get back to you as soon as possible.";
		} else {
			window.clearTimeout(ServerTimeout);
			Spinner.setAttribute('state', false);

			Form.nextElementSibling.innerHTML =
				"Uhoh! Something went wrong. You can try again or mail to: <a href='mailto:sebastian@iamsebastian.dev'>sebastian@iamsebastian.dev</a>. Sorry about that!";
		}
	};

	// dispatch the message
	DispatchMessage(Payload);
};

// add the EV listener to the Submit button

Submit.addEventListener('click', (ev) => {
	ev.preventDefault();

	if (!Submit.disabled) {
		SubmitMessage();
	}
});
