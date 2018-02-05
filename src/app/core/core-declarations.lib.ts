import { CommonFormGroups } from '../shared/formgroups/common';
import {
  PersonService,
  ExceptionService,
  ProductService,
  CompanyService
} from './services/index';

export const commonformgroups = [CommonFormGroups];

export const services = [
  ExceptionService,
  PersonService,
  ProductService,
  CompanyService
];
