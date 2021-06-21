/** @format */

import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

// create the transporter object

const transporter = nodemailer.createTransport({
	host: process.env.HOSTNAME,
	port: 465, // the standard smtp port
	secure: true,
	auth: {
		user: process.env.USERNAME,
		pass: process.env.PASSWORD,
	},
});

// the handleMail function handles the incoming Mail Api call and processes it to send out the mail from the server.

const handleMail = async (req, res) => {
	// extract the data from the request body
	const { email, message } = req.body;

	// create the message body

	const messageText = `
    Timestamped: ${new Date()}
        
    ${email} says: 
    ${message}`;

	const messageBody = {
		from: process.env.USERNAME,
		replyTo: email,
		to: process.env.USERNAME,
		subject: `New Message from ${email}`,
		text: messageText,
	};

	// try to send the message and send the appropriate response

	try {
		let response = await transporter.sendMail(messageBody);
		res.status(200).json({ response, success: true });
	} catch (e) {
		console.log(e);
		res.status(400);
	}
};

export { handleMail };
