import { Time } from '@angular/common';

export class Vozilo {
    marka: string;
    kilometraza: number;
    cena: number;
    ocene: Array<number>;
    prosecnaOcena: number;

    constructor(marka:string, kilo:number, cena:number, ocene:Array<number>){
        this.marka = marka
        this.kilometraza = kilo;
        this.cena = cena;

        this.ocene = ocene;
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