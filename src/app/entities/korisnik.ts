import { TipKorisnika } from '../entities/tipKorisnika.enum';

export class Korisnik {
    tipKosrisnika: TipKorisnika;
    email: string;
    ime: string;
    prezime: string;
    sifra: string;
    grad: string; /* oce da koristimo neke google lokacije */
    broj: number;

    constructor(email:string, ime:string, prezime:string, sifra:string, grad:string, broj:number) {
        this.tipKosrisnika = 2;

        this.email = email;
        this.ime = ime;
        this.prezime = prezime;
        this.sifra = sifra;
        this.grad = grad;
        this.broj = broj;
    }

    getEmail():string {
        return this.email;
    }

    getSifra():string {
        return this.sifra;
    }
}