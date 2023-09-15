import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/modules/login/page/login-page/login-page.component';

const routes: Routes = [{
  path: "login",
  loadChildren: () => import('src/modules/login/login.module').then(m => m.LoginModule)

}, {
  path: "",
  loadChildren: () => import('src/modules/login/login.module').then(m => m.LoginModule)

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
