import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  user = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log("Form Submitted", this.user);
    alert("Message Sent Successfully!");
    this.user = {
      name: '',
    email: '',
    message: ''
    }
    // Here you can call API or EmailJS
  }
}
