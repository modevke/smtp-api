
export interface SecureSMTP{
    host: string,
        port: number,
        secure: boolean,
        auth: {
            type: string,
            user: string,
            clientId: string,
            clientSecret: string,
            refreshToken: string
        }
}
export interface InsecureSMTP{
    host: string,
    port: number,
    secure: boolean,
    tls: {
        rejectUnauthorized: boolean
    },
    auth: {
        user: string,
        pass: string
    }
}

interface Filepath{
    filename: string;
    path: string;
}

export interface MailAttributes{
    environment: string;
    recipient: string | string[],
    cc?: string | string[],
    subject: string,
    text: string,
    html: string,
    paths?: Array<Filepath>,
}
