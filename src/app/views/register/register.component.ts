import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();
  message = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log('Response received');
        this.message = 'Registration Succussful';
        this._router.navigate(['/login']);
      },
      error => {
        console.log('Exception occured');
        this.message = 'Error';
      }
    );
  }

}
