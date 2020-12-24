import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PricesService } from '../../services/prices.service';
import { Products } from '../../services/products';

@Component({
  selector: 'app-allprices',
  templateUrl: './allprices.component.html',
  styleUrls: ['./allprices.component.css']
})
export class AllpricesComponent implements OnInit {

  _productlist: Products[];
  constructor(private _service: PricesService) { }

  ngOnInit(): void {
    this._service.getProductsFromRemote().subscribe(
      data => {
        console.log('Response received');
        this._productlist = data;
    },
      error => console.log('Error occured')
    );
  }

}
