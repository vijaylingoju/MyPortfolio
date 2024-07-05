const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-query', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vijaylingoju111@gmail.com',
            pass: 'v@lingoju123'
        }
    });

    const mailOptions = {
        from: email,
        to: 'vijaylingoju111@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error while sending email');
        }
        res.status(200).send('Query sent successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
