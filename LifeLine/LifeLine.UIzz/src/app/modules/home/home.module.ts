import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
