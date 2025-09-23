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
  name = "";
  email ="";
  subject="";
  message="";

  constructor(private emailService: EmailService) {}

  async SendEmail() {
    console.log(this.name, this.email, this.subject, this.message)
    await this.emailService.sendEmail(this.name, this.email, this.subject, this.message);
  }
}
