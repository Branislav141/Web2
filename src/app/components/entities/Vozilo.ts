import { Time } from '@angular/common';

export class Vozilo {
    marka: string;
    kilometraza: number;
    cena: number;
    ocene: Array<number>;
    prosecnaOcena: number;

    constructor(){
        this.marka = "temp";
        this.kilometraza = 10000;
        this.cena = 100;

        this.ocene.push(4,5,6,3,4);
        this.setOcena(this.ocene);
    }

    setOcena(ocene: Array<number>) {
        let temp = 0;

        for(let i = 0; i < ocene.length; i++)
        {
            temp = temp + ocene[i];
        }
        this.prosecnaOcena = temp / ocene.length;
    }
}