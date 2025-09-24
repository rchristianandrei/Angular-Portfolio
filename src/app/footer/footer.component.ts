import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  name = '';
  email = '';
  subject = '';
  message = '';

  private sending = false;

  constructor(private emailService: EmailService) {}

  async SendEmail() {
    if(this.sending) return;
    this.sending = true;

    const userConfirmed = window.confirm('Are you sure you want to proceed?');

    if (!userConfirmed) return;

    try {
      await this.emailService.sendEmail(
        this.name,
        this.email,
        this.subject,
        this.message
      );
      this.name = this.email = this.subject = this.message = '';
      alert('Message Successfully sent!');
    } catch (err) {
      alert('Message failed to send!');
    } finally{
      this.sending = false;
    }
  }
}
