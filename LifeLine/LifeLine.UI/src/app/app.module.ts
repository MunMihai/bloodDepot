import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './modules/static/home/components/header/header.component';
import { HomeComponent } from './modules/static/home/home.component';
import { ContactComponent } from './modules/static/contact/contact.component';
import { AboutUsComponent } from './modules/static/about-us/about-us.component';
import { CampaignComponent } from './modules/static/campaign/campaign.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    CampaignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
