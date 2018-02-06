import { Component, OnInit } from '@angular/core';
import { Company, CompanyResponse } from '../shared/models/entities/company';
import { FormGroup } from '@angular/forms';
import { CommonFormGroups } from '../shared/formgroups/common';
import { CompanyService } from '../core/services/company.service';
import { ToastrService } from 'ngx-toastr';
import { Helpers } from '../shared/helpers/helpers';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;
  companyForm: FormGroup;
  formResponse: CompanyResponse;
  fileList: File[] = [];

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
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        this.fileList.push(files[i]);
      }
    }
  }

  save() {
    const form = this.companyForm;

    const formData = new FormData();
    formData.append('id', this.companyForm.get('id').value);
    formData.append('companyName', this.companyForm.get('companyName').value);
    formData.append('city', this.companyForm.get('city').value);
    formData.append('state', this.companyForm.get('state').value);
    formData.append('postalCode', this.companyForm.get('postalCode').value);
    this.fileList.forEach(item => {
      formData.append('files', item);
    });

    this.companyService.upload(formData, 'postcompany').subscribe(
      res => {
        if (res.success) {
          this.formResponse = new CompanyResponse();
          this.formResponse.company = new Company();
          this.formResponse.company = res['company'];
          this.formResponse.files = res['fileList'];

          this.toastr.success('Company saved successfully!', 'Save Company');
        } else {
          this.toastr.error(res.errorMessage, 'Save Company Failure');
        }
      },
      error => this.toastr.error(error, 'Save Company Error')
    );
  }
}
