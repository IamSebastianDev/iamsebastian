/** @format */

/**
 *
 * The first section of code deals with importing, creating and using the i18n provider for the website.
 *
 * Import the provider and dictionaries.
 *
 */

import { Vay } from './vay.min.js';
import en from './dicts/en.dict.mjs';
import de from './dicts/de.dict.mjs';

// create and export the provided in the default configuration

const i18n = new Vay({ dictionaries: { en, de } });

// call the inital render for all static elements on the website

i18n.render();

// Deal with the controls for changing and setting the language.

const langSelector = {
	de: document.querySelector("[language='de']"),
	en: document.querySelector("[language='en']"),
};

/**
 * On the DOMContentLoaded event, get the currently active language from the provided and find the button corresponding
 * to it. Set it to activee as part of the UI update.
 */

window.addEventListener('DOMContentLoaded', (ev) => {
	// current language;
	const current = i18n.currentLanguage;
	// set the language button active to equal to the language
	langSelector[current].classList.add('i18n-selector-active');
});

// create EVlisteners on the button elements itself to change the language directly.

langSelector.de.addEventListener('click', (ev) => {
	i18n.currentLanguage = ev.target.getAttribute('language');
});

langSelector.en.addEventListener('click', (ev) => {
	i18n.currentLanguage = ev.target.getAttribute('language');
});

/**
 *
 * The second section of code deals with creating the portfolio cards, and updating them whenever the language changes.
 * For that, a custom render method is created that will render the components according to the currently selecte
 * language on the Vay:languageHasChanged event.
 *
 */

// import the custom PortfolioCard component

import { PortfolioCard } from './components/PortfolioCard.component.mjs';
import { PortfolioGrid } from './components/PortfolioGrid.component.mjs';

// import the data for the portfolio
import data from './data/portfolio.data.mjs';

const render = ({ target }) => {
	// get the portfolio data
	const Data = data(i18n);

	// find the current slider and grid elements
	const slider = target.querySelector('.portfolio-slider');
	const grid = target.querySelector('.portfolio-grid');

	// remove all slider and grid childNodes.
	// This way section headings are preserved and can be treated as static content.
	[...slider.childNodes].forEach((node) => node.remove());
	[...grid.childNodes].forEach((node) => node.remove());

	// extract the first three elements and render them as cards.
	Data.slice(0, 4).forEach((card) => new PortfolioCard(card).render(slider));
	Data.slice(4).forEach((card) => new PortfolioGrid(card).render(grid));
};

render({ target: document.querySelector('#portfolio') });

// Listen to the languageHasChanged Event to initiate a new render and set the
// controlls accordingly.

window.addEventListener('languageHasChanged', (ev) => {
	i18n.render();
	render({ target: document.querySelector('#portfolio') });

	// current language;
	const current = i18n.currentLanguage;

	let notCurrent = current == 'de' ? 'en' : 'de';

	// set the language button active to equal to the language
	langSelector[current].classList.add('i18n-selector-active');
	langSelector[notCurrent].classList.remove('i18n-selector-active');
});

/**
 *
 * the third section of code deals with everything pertaining to the contact form.
 *
 */

const ContactForm = {
	formElement: document.querySelector('#mailer'),
	submit: document.querySelector('#contact-submit'),
	emailInput: document.querySelector('#email'),
	messageInput: document.querySelector('#message'),
	loader: document.querySelector('#contact-submit-spinner'),

	assureNoTimeOut() {
		// create a timeout flag

		this.timeoutFlag = true;
		this.timeOut = window.setTimeout(() => {
			this.reportTimeout();
		}, 10000);
	},
	resetTimeOut() {
		window.clearTimeout(this.timeOut);
	},
	reportTimeout() {
		if (!this.timeoutFlag) {
			return;
		}

		// set the loader to inactive
		this.loader.setAttribute('state', false);
		this.formElement.nextElementSibling.innerHTML =
			i18n.translate('form.timeout');
	},
	validateForm() {
		const email = this.emailInput.value;
		const message = this.messageInput.value;

		const validated = {
			errors: [],
			noErrors: true,
		};

		// progress through the validation chain and add all errors found to the errors array

		if (
			email.trim().length === 0 ||
			!(email.includes('@') && email.includes('.'))
		) {
			validated.errors.push({
				element: this.emailInput,
				message: i18n.translate('form.validation.emailIncorrect'),
			});
			validated.noErrors = false;
		}

		if (message.trim().length < 10) {
			validated.errors.push({
				element: this.messageInput,
				message: i18n.translate('form.validation.messageToShort'),
			});

			validated.noErrors = false;
		}

		return validated;
	},
	setValidation(errors) {
		// this methods receives the error array containing the element the error orginates from as well
		// as the errormessage itself.

		errors.forEach((error) => {
			const { message, element } = error;

			// if the field is not valid, display the validation message on the correct sibling element, and add event listeners for reset of the element

			element.setAttribute('state', false);
			const { nextElementSibling } = element;

			nextElementSibling.textContent = message;
			nextElementSibling.setAttribute('state', true);

			// add the reset ev listener to the element

			const resetField = () => {
				element.removeEventListener('click', resetField);
				element.setAttribute('state', true);
				nextElementSibling.textContent = '';
				nextElementSibling.setAttribute('state', false);
			};

			element.addEventListener('click', resetField);
		});
	},
	submitMessage() {
		const validatedFields = this.validateForm();

		// set the spinners state to active and set the timeOut counter
		if (validatedFields.errors.length > 0) {
			this.setValidation(validatedFields.errors);
			return;
		}

		// if no errors are found, set the loader

		validatedFields.errors.length === 0 &&
			this.loader.setAttribute('state', 'active');

		// set the server timeout function
		this.assureNoTimeOut();

		// dispatch the message to the server
		const payload = JSON.stringify({
			email: this.emailInput.value,
			message: this.messageInput.value,
		});

		this.dispatchMessage({ payload });
	},
	async dispatchMessage({ payload }) {
		// begin a async post fetch call to the api
		const response = await fetch('./handleMail', {
			method: 'POST',
			body: payload,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		// decode the JSON response from the server

		const result = await response.json();
		if (result != undefined) {
			this.timeoutFlag = false;
		}

		// reset the server timeout and the loader

		this.loader.setAttribute('state', false);
		this.resetTimeOut;

		const { nextElementSibling } = this.formElement;

		if (result.success) {
			this.submit.textContent = i18n.translate('form.success');
			this.submit.disabled = true;

			nextElementSibling.textContent = i18n.translate('form.thanks');
		} else {
			nextElementSibling.innerHTML = i18n.translate('form.failure');
		}
	},
	onSubmit(ev) {
		// prevent default form submit event

		ev.preventDefault();

		// if the submit button is not diabled when it was clicked,
		// Submit the message

		!this.submit.disabled && this.submitMessage();
	},

	// method to initalize the contact form handler

	initalize() {
		this.formElement.addEventListener('submit', (ev) => {
			this.onSubmit(ev);
		});
	},
};

ContactForm.initalize();
