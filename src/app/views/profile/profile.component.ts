import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, NgForOf } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { User } from '../../services/user';
import { RegistrationService } from '../../services/registration.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  _users: User;
  users = new User();
  message = '';

  constructor(private _service: RegistrationService, private _router: Router) {}


  updateUser() {
    this._service.updateUserFromRemote(this.users).subscribe(
      data => {
        console.log('Response Received');
        this.message = 'Updated';
        this._router.navigate(['profile/editprofile']);
      },
      error => {
        console.log('Exception occured');
        this.message = 'Error';
      }
    );
  }

  ngOnInit(): void {
    this._service.getUserFromRemote().subscribe(
      data => {
        console.log('Response Recieved');
        this._users = data;
      },
      error => console.log('Error Occured')
    );
  }

}
