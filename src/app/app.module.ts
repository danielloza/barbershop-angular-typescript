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
import { RouterModule, Routes } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageService } from './admin-packages/package-service';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './admin-packages/form.component';
import { FormBarberComponent } from './admin-barbers/form-barber.component';
import { LoginComponent } from './usuarios/login.component';

//Call Component
const route: Routes = [
  {path: '', redirectTo: '/appointments', pathMatch: 'full' },
  {path: 'barbers', component: BarbersComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'privacypolicy', component: PrivacypolicyComponent},
  {path: 'term-and-conditions', component: TermAndConditionsComponent},

  {path: 'admin', component: AdminComponent},
  {path: 'admin-barbers', component: AdminBarbersComponent},
  {path: 'admin-packages', component: AdminPackagesComponent},
  {path: 'admin-packages/form', component: FormComponent },
  {path: 'admin-packages/form/:id', component: FormComponent },
  {path: 'admin-barbers/form', component: FormBarberComponent },
  {path: 'admin-barbers/form/:id', component: FormBarberComponent },
  {path: 'login', component: LoginComponent }

];

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
    TermAndConditionsComponent,
    FormComponent,
    FormBarberComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)


  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
