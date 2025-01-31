const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

// Load environment variables
dotenv.config()

// Load OAuth2 library
const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
    
    // Assemble authentication client withb
    const authClient = new OAuth2(
        process.env.G_CLIENT_ID,
        process.env.G_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    // Set credentials
    authClient.setCredentials({
        refresh_token: process.env.G_REFRESH
    })

    // Fetch and verify access token
    const accessToken = await new Promise((res, rej) => {
        authClient.getAccessToken((err, token) => {
            if(err){
                rej("WARNING: Failed to create token.")
                console.log(err)
            } 
            res(token)
        })
    })

    // Create transporter to send emails from host
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.G_EMAIL,
            clientId: process.env.G_CLIENT_ID,
            clientSecret: process.env.G_CLIENT_SECRET,
            refreshToken: process.env.G_REFRESH,
            accessToken
        }
    })

    return transport
}


module.exports = {
    createTransporter
}