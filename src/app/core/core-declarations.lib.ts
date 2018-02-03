import { CommonFormGroups } from '../shared/formgroups/common';
import {
  UploadService,
  ExceptionService,
  ProductService,
  CompanyService
} from './services/index';

export const commonformgroups = [CommonFormGroups];

export const services = [
  ExceptionService,
  UploadService,
  ProductService,
  CompanyService
];
