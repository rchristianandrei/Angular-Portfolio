import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  async sendEmail(name: string, email: string, subject: string, message: string) {
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    await emailjs.send('service_jf2zesa', 'template_xzhtlz7', templateParams, 'ZSN4M3v44AxBQx5OJ')
      .then((response) => {
        console.log('Email sent successfully!', response);
      }, (error) => {
        console.log('Failed to send email:', error);
      });
  }
}
