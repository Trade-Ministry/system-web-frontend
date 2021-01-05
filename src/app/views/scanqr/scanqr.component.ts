import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.component.html',
  styleUrls: ['./scanqr.component.css']
})
export class ScanqrComponent implements OnInit {

  title = 'reading-qrcode';
  elementType = 'url';
  public imagePath;
  value: any;
  @ViewChild('result') resultElement: ElementRef;
  showQRCode: boolean = false;

  constructor(private renderer: Renderer2) { }

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
    this.renderElement(element);
  }

  renderElement(element) {
    for (const node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }

  ngOnInit(): void {
  }

}
