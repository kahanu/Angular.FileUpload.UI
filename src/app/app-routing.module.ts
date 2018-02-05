import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'person', loadChildren: 'app/person/person.module#PersonModule' },
      { path: 'products', loadChildren: 'app/product/product.module#ProductModule' },
      { path: 'companies', loadChildren: 'app/company/company.module#CompanyModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
