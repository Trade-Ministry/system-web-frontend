import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxDropzonePreviewComponent } from 'ngx-dropzone';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: File[] = [];

  constructor(private http: HttpClient, private _router: Router, private spinner: NgxSpinnerService) { }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.spinner.show();
    const formData = new FormData();

    formData.append('file', this.files[0]);

    this.http.post('http://localhost:8080/upload', formData).subscribe(res => {
      console.log(res);
      this._router.navigate(['/allprices']);
      this.spinner.hide();
    });

  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
