import { Component, OnInit } from '@angular/core';
import { Company, CompanyResponse } from '../shared/models/entities/company';
import { FormGroup } from '@angular/forms';
import { CommonFormGroups } from '../shared/formgroups/common';
import { CompanyService } from '../core/services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;
  companyForm: FormGroup;
  formResponse: CompanyResponse;

  constructor(
    private commonFormGroups: CommonFormGroups,
    private companyService: CompanyService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.companyForm = this.commonFormGroups.initCompany(this.company);
  }

  uploadFiles(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      // this.companyForm.get('avatar').setValue(file);
    }
  }

  save() {
    const form = this.companyForm.value;

    const payload = {
      CompanyToSave: form
    };

    console.log('payload: ', payload);

    this.companyService.save(payload, '')
      .subscribe(res => {
        if (res.success) {
          this.formResponse = new CompanyResponse();
          this.formResponse.company = new Company();
          this.formResponse.company = res['company'];
          this.formResponse.files = res['fileList'];
          this.toastr.success('Company saved successfully!', 'Save Company');
        } else {
          this.toastr.error(res.errorMessage, 'Save Company Failure');
        }
      }, error => this.toastr.error(error, 'Save Company Error'));

  }
}
