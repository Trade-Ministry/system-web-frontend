import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  categories = [
    { id: 1, val: 'එළවළු', name: 'Vegetables(එළවළු)' },
    { id: 2, val: 'පළතුරු', name: 'Fruits(පළතුරු)' },
    { id: 3, val: 'ධාන්‍යය', name: 'Grains(ධාන්‍යය)' },
    { id: 4, val: 'පලාවර්ග', name: 'Leafy Greens(පලාවර්ග)' },
    { id: 5, val: 'අලවර්ග', name: 'Yams(අලවර්ග)' },
    { id: 6, val: 'කරවල', name: 'Maldive Fish(කරවල)' },
    { id: 7, val: 'මස්', name: 'Meat(මස්)' },
    { id: 8, val: 'මාළු', name: 'Fish(මාළු)' },
    { id: 9, val: 'අනෙකුත්', name: 'Other(අනෙකුත්)..' },
  ];

  constructor(private _service: PricesService, private _router: Router, private spinner: NgxSpinnerService) { }


  addPrice() {
    this.spinner.show();
    this._service.addProductFromRemote(this.products).subscribe(
      data => {
        console.log('Respose received');
        this.message = 'Price added successfully';
        this.spinner.hide();
        this._router.navigate(['/allprices']);
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
