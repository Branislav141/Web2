import { Injectable } from '@angular/core';
import { Korisnik } from '../entities/korisnik';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor() { }

  loadKorisnike(): Array<Korisnik> {
    let temp = new Array<Korisnik>();

    const k1 = new Korisnik("email1", "Luka", "Draca", "1234", "grad", 1234);
    const k2 = new Korisnik("email2", "Branislav", "Perovic", "1234", "grad", 1234);
    const k3 = new Korisnik("email3", "ime", "prezime", "1234", "grad", 1234);
    const k4 = new Korisnik("email4", "ime", "prezime", "1234", "grad", 1234);

    temp.push(k1);
    temp.push(k2);
    temp.push(k3);
    temp.push(k4);

    return temp;
  }
}
