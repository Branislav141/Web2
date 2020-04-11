import { Let } from '../entities/Let';

export class Aviokkompanija {
    naziv: string;
    adresa: string;
    promotivniOpis: string;
    destinacije: Array<string>;
    letovi: Array<Let>;
    kartePopust: Array<string>; /* tipa da bude niz karata */
    ocene: Array<number>;
    prosecnaOcena: number;
    /*fali jos mesta u avionu*/
    cenovnik: Array<number>;
    prtljag: Array<string>; /* tipa dozvoljeni prtljag */

    constructor() {
        this.naziv = "Temp";
        this.adresa = "temp";
        this.promotivniOpis = "tempic";
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
