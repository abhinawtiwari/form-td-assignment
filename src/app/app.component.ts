import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') newForm: NgForm;
  defaultSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.user.email = this.newForm.value.email;
    this.user.subscription = this.newForm.value.subscription;
    this.user.password = this.newForm.value.password;
  }
}
