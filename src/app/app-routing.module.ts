import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { DomesticComponent } from './domestic/domestic.component';

const routes: Routes = [
  {path:'',component:TopheadlineComponent},
  {path:'tech',component:TechComponent},
  {path:'buzz',component:BussinessComponent},
  {path:'dom',component:DomesticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
