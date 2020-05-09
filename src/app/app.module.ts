import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentaCarComponent } from './components/renta-car/renta-car.component';
import { AviokompanijaRentaCarComponent } from './components/aviokompanija-renta-car/aviokompanija-renta-car.component';
import { PretragaComponent } from './components/pretraga/pretraga.component';
import { AvioFilteredComponent } from './components/avio-filtered/avio-filtered.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PocetnaStranicaComponent,
    AviokompanijaComponent,
    RentaCarComponent,
    AviokompanijaRentaCarComponent,
    PretragaComponent,
    AvioFilteredComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
