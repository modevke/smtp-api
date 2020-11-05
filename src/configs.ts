export const configs = {
    sender_id: '',
    secure: {
        host: '',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: '',
            clientId: '',
            clientSecret: '',
            refreshToken: ''
        }
    },
    insecure: {
        host: '',
        port: 25,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: '',
            pass: ''
        }
    }
}