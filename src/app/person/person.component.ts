import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/entities/person';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonFormGroups } from '../shared/formgroups/common';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from '../core/services/index';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;
  personForm: FormGroup;
  avatar: File;
  formResponse: any;

  constructor(
    private fb: FormBuilder,
    private commonFormGroups: CommonFormGroups,
    private personService: PersonService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm(this.person);
  }

  initForm(model?: Person) {
    this.personForm = this.commonFormGroups.initPerson(this.person);
  }

  uploadFiles(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.personForm.get('avatar').setValue(file);
    }
  }

  save() {
    console.log('form: ', this.personForm.value);
    const formData = new FormData();
    formData.append('name', this.personForm.get('name').value);
    formData.append('age', this.personForm.get('age').value);
    formData.append('avatar', this.personForm.get('avatar').value);

    this.personService.upload(formData).subscribe(
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
