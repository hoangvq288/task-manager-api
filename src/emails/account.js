const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hoangvq288@gmail.com',
        subject: 'Welcome Task App! Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hoangvq288@gmail.com',
        subject: 'Sorry you just leave it',
        text: `Goodbye, ${name}, I hope to see you back sometimes soon.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}