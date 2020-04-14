import { Vozilo } from '../entities/Vozilo';

export class Rent_a_car {
    naziv: string;
    adresa: string;
    promotivniOpis: string;
    ocene: Array<number>;
    prosecnaOcena: number;
    vozila: Array<Vozilo>;
    filijali: Array<string>; /* lokacije na kojima servis posluje, moze da bude klasa sa punom adresom */

    constructor(naziv:string, adresa:string, opis:string, ocene:Array<number>, vozila:Array<Vozilo>, filijale:Array<string>) {
        this.naziv = naziv;
        this.adresa = adresa;
        this.promotivniOpis = opis;
        this.ocene = ocene;
        this.setOcena(ocene);
        this.vozila = vozila;
        this.filijali = filijale;
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
