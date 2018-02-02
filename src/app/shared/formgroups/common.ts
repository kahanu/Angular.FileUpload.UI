import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../models/person';
import { Helpers } from '../helpers/helpers';


@Injectable()
export class CommonFormGroups {

  constructor(private fb: FormBuilder) {}

  initPerson(model?: Person) {
    let form: FormGroup;

    form = this.fb.group({
      id: [model ? model.id : Helpers.emptyGuid],
      name: [model ? model.name : ''],
      age: [model ? model.age : 0],
      avatar: [model ? model.avatar : '']
    });

    return form;
  }

}
