import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonFormGroups } from '../shared/formgroups/common';
import { Helpers } from '../shared/helpers/helpers';
import { UploadService } from '../core/services/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  person: Person;
  uploadForm: FormGroup;
  avatar: File;
  formResponse: any;

  constructor(
    private fb: FormBuilder,
    private commonFormGroups: CommonFormGroups,
    private uploadService: UploadService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm(this.person);
  }

  initForm(model?: Person) {
    this.uploadForm = this.commonFormGroups.initPerson(this.person);
  }

  uploadFiles(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.uploadForm.get('avatar').setValue(file);
    }
  }

  save() {
    console.log('form: ', this.uploadForm.value);
    const formData = new FormData();
    formData.append('name', this.uploadForm.get('name').value);
    formData.append('age', this.uploadForm.get('age').value);
    formData.append('avatar', this.uploadForm.get('avatar').value);

    this.uploadService.upload(formData).subscribe(
      res => {
        if (res.success) {
          this.formResponse = res['formValues'];
          this.toastr.success('Upload Success!', 'Upload');
        }
      },
      error => this.toastr.error(error, 'Upload Error')
    );
  }
}
