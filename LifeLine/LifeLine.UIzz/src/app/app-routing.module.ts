import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
, {
  path: "dashboard",
  loadChildren: () => import('src/modules/pages/login.module').then(m => m.LoginModule)
}//,// {
//  path: "",
//  loadChildren: () => import('src/modules/login/login.module').then(m => m.LoginModule)

  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
