import { Vozilo } from '../entities/Vozilo';

export class Rent_a_car {
    naziv: string;
    adresa: string;
    promotivniOpis: string;
    ocene: Array<number>;
    prosecnaOcena: number;
    vozila: Array<Vozilo>;
    filijali: Array<string>; /* lokacije na kojima servis posluje, moze da bude klasa sa punom adresom */

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
