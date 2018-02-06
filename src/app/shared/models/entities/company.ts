import { Entity } from '../base';


export class Company extends Entity {
  companyName: string;
  city: string;
  state: string;
  postalCode: string;
  files: File[];
}

export class File {
  fileName: string;
  fileSize: number;
  contentType: string;
}

export class CompanyResponse extends Entity {
  company: Company;
  files: File[];
}
