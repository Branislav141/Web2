import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranicaComponent } from './components/pocetna-stranica/pocetna-stranica.component';
import { AviokompanijaComponent } from './components/aviokompanija/aviokompanija.component';
import { RentaCarComponent } from './components/renta-car/renta-car.component';
import { AviokompanijaRentaCarComponent } from './components/aviokompanija-renta-car/aviokompanija-renta-car.component';

const routes: Routes = [
  {
    path: 'pocetna-stranica',
    component: PocetnaStranicaComponent,
  },
  {
    path: '',
    component: PocetnaStranicaComponent,
  },
  {
    path: 'aviokompanija',
    component: AviokompanijaComponent,
  },
  {
    path: 'renta-car',
    component: RentaCarComponent,
  },
  {
    path: 'aviokompanija-renta-car',
    component: AviokompanijaRentaCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
