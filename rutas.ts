import { Router, Request, Response } from 'express';
const nodemailer = require('nodemailer');
const ruta = Router();

ruta.post('/', (req: Request, res: Response) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: {
			user: process.env.AUTH_USER,
			pass: process.env.AUTH_PASS,
		},
		tls: { rejectUnauthorized: false },
	});

	transporter.verify(function (error: Error) {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	const { email, name, dni, salida, destino } = req.body;

	if (email && name && dni && salida && destino) {
		const nBoleto = Math.round(Math.random() * 999);

		const mailOptions = {
			from: process.env.AUTH_USER,
			to: email,
			subject: `🚌 Reserva de Boleto N° ${nBoleto} para el Sr. ${name}`,
			html: `
			<div style='font-size: 18px; line-height: 30px;'>
				🔴 Sr. <b>${name}</b> con DNI: <b>${dni}</b>,
				su boleto ha sido registrado correctamente. 🎫<br />
				🚌 El bus <b>${nBoleto}</b> lo estará esperando encantadamente ☺️<br />
				⬆️ Salida: <b>${salida}</b><br />
				⬇️ Destino: <b>${destino}</b><br />
				🙏 Agradecemos el contar con nosotros 🫂<br />
			</div>
			<br />
			<img src='${process.env.CLIENT}/eppo_logo.png' alt='' />`,
		};

		transporter.sendMail(mailOptions, (error: Error) => {
			error ? console.log(error) : console.log('Email enviado');
			res.redirect('/');
		});
	} else {
		console.log('¡Datos incompletos!');
	}

	res.redirect(`${process.env.CLIENT}`);
});

module.exports = ruta;
