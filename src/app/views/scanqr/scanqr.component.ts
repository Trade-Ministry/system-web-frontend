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
