import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PricesService } from '../../services/prices.service';
import { Products } from '../../services/products';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  products = new Products();
  message = '';

  constructor(private _service: PricesService, private _router: Router) { }


  addPrice() {
    this._service.addProductFromRemote(this.products).subscribe(
      data => {
        console.log('Respose received');
        this.message = 'Price added successfully';
        this._router.navigate(['/dashboard']);
      },
      error => {
        console.log('Exception occured');
        this.message = 'Error';
      }
    );
  }

  ngOnInit(): void {
  }

}
