import { Component, OnInit } from '@angular/core';
import { Rent_a_car } from 'src/app/entities/rent_a_car';
import { RentaCarService } from '../../services/renta-car.service';

@Component({
  selector: 'app-renta-car',
  templateUrl: './renta-car.component.html',
  styleUrls: ['./renta-car.component.css']
})
export class RentaCarComponent implements OnInit {
  rentovi: Array<Rent_a_car>;

  constructor(private rentaCarService:RentaCarService) { 
    this.rentovi = this.rentaCarService.loadRentACar();
  }

  ngOnInit(): void {
  }

}
