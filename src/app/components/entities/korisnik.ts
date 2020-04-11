export class Korisnik {
    tipKosrisnika: TipKorisnika;
    email: string;
    ime: string;
    prezime: string;
    sifra: string;
    grad: string; /* oce da koristimo neke google lokacije */
    broj: number;

    constructor() {
        this.tipKosrisnika = 1;
    }
}