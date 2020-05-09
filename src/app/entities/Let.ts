import { Time } from '@angular/common';

export class Let {
  polazak: string;
  destinacija: string;
  vremePoletanja: string;
  vremeSletanja: string;
  vremePutovanja: Time;
  duzinaPutovanja: number;
  lokacijePresedanja: Array<string>;
  brojPresedanja: number;
  cenaKarte: number;
  ocene: Array<number>;
  prosecnaOcena: number;

  constructor(
    polazak: string,
    destinacija: string,
    cenaKarte: number,
    vremePoletanja: string,
    vremeSletanja: string
  ) {
    this.polazak = polazak;
    this.destinacija = destinacija;
    this.cenaKarte = cenaKarte;
    this.vremePoletanja = vremePoletanja;
    this.vremeSletanja = vremeSletanja;
    /*  
        this.vremePoletanja.minutes = 30;

        this.vremeSletanja.hours = 3;
        this.vremeSletanja.minutes = 45;

        this.setVremePutovanja(this.vremePoletanja, this.vremeSletanja);

        this.lokacijePresedanja.push("Beograd", "Budimpesta", "Moskva");
        this.setBrojPresedanja(this.lokacijePresedanja);

        

        this.ocene.push(4,5,5,3,4);
        this.setOcena(this.ocene); */
  }

  /*  setVremePutovanja(x:Time, y:Time) {
        this.vremePutovanja.hours = y.hours - x.hours;
        this.vremePutovanja.minutes = y.minutes - x.minutes;
    } */

  /* setBrojPresedanja(x:Array<string>) {
        this.brojPresedanja = x.length;
    } */

  /* setOcena(ocene: Array<number>) {
        let temp = 0;
        for(let i = 0; i < ocene.length; i++)
        {
            temp = temp + ocene[i];
        }
        this.prosecnaOcena = temp / ocene.length;
    } */
}
