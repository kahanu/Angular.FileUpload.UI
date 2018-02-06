import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../models/entities/person';
import { Helpers } from '../helpers/helpers';
import { Company } from '../models/entities/company';
import { Validators } from '@angular/forms';


@Injectable()
export class CommonFormGroups {

  constructor(private fb: FormBuilder) {}

  initPerson(model?: Person) {
    let form: FormGroup;

    form = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : '', [Validators.required]],
      age: [model ? model.age : 0, [Validators.required]],
      avatar: [model ? model.avatar : '']
    });

    return form;
  }

  initCompany(model?: Company) {
    return this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      companyName: [model ? model.companyName : 'Acme Widgets, LLC.', [Validators.required]],
      city: [model ? model.city : 'Burbank', [Validators.required]],
      state: [model ? model.state : 'CA', [Validators.required]],
      postalCode: [model ? model.postalCode : '91604', [Validators.required]],
      files: [model ? model.files : []]
    });
  }

}
