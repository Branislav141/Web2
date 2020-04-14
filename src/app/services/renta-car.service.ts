import { Injectable } from '@angular/core';
import { Rent_a_car } from '../entities/rent_a_car';
import { Vozilo } from '../entities/Vozilo';

@Injectable({
  providedIn: 'root'
})
export class RentaCarService {

  constructor() { }

  loadRentACar(): Array<Rent_a_car> {
    let rent = new Array<Rent_a_car>();
    let vozila = new Array<Vozilo>();

    const vozilo1 = new Vozilo("Passat B8", 10000, 25, [5,4,5,5,5]);
    const vozilo2 = new Vozilo("Passat B8", 10000, 25, [5,4,5,5,5]);
    const vozilo3 = new Vozilo("Passat B8", 10000, 25, [5,4,5,5,5]);
    const vozilo4 = new Vozilo("Passat B8", 10000, 25, [5,4,5,5,5]);

    vozila.push(vozilo1);
    vozila.push(vozilo2);
    vozila.push(vozilo3);
    vozila.push(vozilo4);

    const rent1 = new Rent_a_car("Volkswagen", "Alekse Santica 1", "flex", [4,5,3,5,5], vozila, ["Beograd", "Novi Sad", "Subotica"]);
    const rent2 = new Rent_a_car("Volkswagen", "Alekse Santica 1", "flex", [4,5,3,5,5], vozila, ["Beograd", "Novi Sad", "Subotica"]);

    rent.push(rent1);
    rent.push(rent2);

    return rent;
  }
}
