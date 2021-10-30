/** @format */

import Express from 'express';
const App = Express();

// import and config dotenv

import dotenv from 'dotenv';
dotenv.config();

// include the static folder

App.use(Express.static('./public'));

// set up the mail API route

import { handleMail } from './api/handleMail.mjs';

App.use(Express.json());
App.post('/handleMail', handleMail);

// define the Port

const PORT = process.env.PORT || 31415;

// start the server

App.listen(PORT, () => console.log(`Server up on ${PORT}`));
