import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  constructor(private _service: RegistrationService) { }

  loginUser() {
    this._service.loginUserFromRemote();
  }

 }
