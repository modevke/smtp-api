import nodemailer from 'nodemailer';
import { MailAttributes } from './interfaces';
import {configs} from './configs'; 

async function sendmail(security: boolean, email: MailAttributes){

    const secure: string = security ? 'secure' : 'insecure';

    const transporter = nodemailer.createTransport(configs[secure]);
    const sender_id = configs.sender_id;
    const cc = email.cc || '';
    const paths = email.paths || [];

    let mail;
    try{
        mail = await transporter.sendMail({
            from: sender_id,
            to: email.recipient,
            cc: cc,
            subject: email.subject, 
            text: email.text, 
            html: email.html,
            attachments: paths
        });
    }catch(e){
        return e;
    } 
    return mail;
}