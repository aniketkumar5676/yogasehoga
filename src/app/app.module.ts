import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './modules/components/home-view/home-view.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { YogaCenterComponent } from './modules/components/home-yoga-center/yoga-center.component';
import { AboutComponent } from './modules/components/about/about.component';
import { HomeView1Component } from './modules/components/home-view1/home-view1.component';
import { HomeViewServiceComponent } from './modules/components/home-view-service/home-view-service.component';
import { WhatsappComponent } from './modules/components/whatsapp/whatsapp.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { CorporateYogaComponent } from './modules/components/corporate-yoga/corporate-yoga.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NavbarComponent,
    ContactComponent,
    YogaCenterComponent,
    AboutComponent,
    HomeView1Component,
    HomeViewServiceComponent,
    WhatsappComponent,
    FooterComponent,
    CorporateYogaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
