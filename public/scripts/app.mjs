/** @format */

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
