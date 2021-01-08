import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PricesService } from '../../services/prices.service';
import { Products } from '../../services/products';


@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.component.html',
  styleUrls: ['./scanqr.component.css']
})
export class ScanqrComponent implements OnInit {

  title = 'reading-qrcode';
  products = new Products();
  userForm: FormGroup;
  message = '';
  fillQR;
  formDiv: boolean = false;
  elementType = 'url';
  public imagePath;
  value: any;
  @ViewChild('result') resultElement: ElementRef;
  showQRCode: boolean = false;

  constructor(private renderer: Renderer2, private _service: PricesService, private _router: Router,
    private spinner: NgxSpinnerService, public formBuilder: FormBuilder) {
     }


  addPrice() {
    console.log(this.fillQR.get('category').value);
    const formData: any = new FormData();
    console.log('working');

    formData.append('products.category', this.fillQR.get('category').value);
    formData.append('products.item', this.fillQR.get('item').value);
    formData.append('products.minPrice', this.fillQR.get('minprice').value);
    formData.append('products.maxPrice', this.fillQR.get('maxprice').value);

    console.log(formData);
    console.log('working');

    this._service.addProductFromRemote(formData).subscribe(
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

  viewForm() {
    this.formDiv = true;
  }


  preview(files) {
    if ( files.length === 0 ) {
      return;
    }

    const mimeType = files[0].type;

    if ( mimeType.match(/image\/*/) == null ) {
      console.log('Only images');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.value = reader.result;
      console.log(reader.result);
      this.showQRCode = true;
    };
  }

  render(e) {
    const element: Element = this.renderer.createElement('h1');
    const inp: Element = this.renderer.createElement('input');
    element.innerHTML = e.result;
    const ks = e.result.split('\n');
    let category = '';
    let item = '';

    for ( let i = 0 ; i <= 1 ; i++) {

      if (ks[i].indexOf('Category') > -1) {
        category = ks[i].split('Category:');
      } else if (ks[i].indexOf('Item') > -1) {
        item = ks[i].split('Item:');
      }
    }

    const cat = category[1];
    const itm = item[1];
    console.log(cat);
    console.log(itm);

    this.fillQR = this.formBuilder.group({
      category: [cat, [Validators.required]],
      item: [itm, [Validators.required]],
      minprice: ['', [Validators.required]],
      maxprice: ['', [Validators.required]]
    });

    this.renderElement(element);
  }

  renderElement(element) {
    for (const node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
    this.viewForm();
  }

  ngOnInit(): void {
  }

}
