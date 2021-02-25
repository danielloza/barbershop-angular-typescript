import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AdminComponent } from './admin/admin.component';
import { AdminBarbersComponent } from './admin-barbers/admin-barbers.component';
import { AdminPackagesComponent } from './admin-packages/admin-packages.component';
import { BarbersComponent } from './barbers/barbers.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentsComponent,
    AdminComponent,
    AdminBarbersComponent,
    AdminPackagesComponent,
    BarbersComponent,
    GalleryComponent,
    ServicesComponent,
    PrivacypolicyComponent,
    TermAndConditionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
