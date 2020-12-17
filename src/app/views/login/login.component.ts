import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  constructor(private _service: RegistrationService, private _router: Router) { }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {console.log('Response recieved');
      this._router.navigate(['/dashboard']);
    },
      error => console.log('Error occured')
    );
  }

 }
