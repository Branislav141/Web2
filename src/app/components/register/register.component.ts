import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../entities/korisnik';
import { KorisnikService } from '../../services/korisnik.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrovaniKorisnici: Array<Korisnik>;

  constructor(private korisnikService: KorisnikService) { 
    this.registrovaniKorisnici = this.korisnikService.loadKorisnike();
  }

  ngOnInit(): void {
  }

  register(emailInput, nameInput, lastnameInput, passwordInput, repasswordInput, cityInput, numberInput){
    console.log("Email je: " + emailInput.value);
    console.log("Ime je: " + nameInput.value);
    console.log("Prezime je: " + lastnameInput.value);
    console.log("Sifra je: " + passwordInput.value);
    console.log("Ponovljena sifra je: " + repasswordInput.value);
    console.log("Grad je: " + cityInput.value);
    console.log("Broj je: " + numberInput.value);

    for (let i = 0; i < this.registrovaniKorisnici.length; i++) {
      if(this.registrovaniKorisnici[i].getEmail() === emailInput.valuessword)
      {
        console.log("Ovaj e-mail se vec koristi!");
        break;
      } else {
        if(passwordInput.value === repasswordInput.value)
        {
          console.log("Sifre se poklapaju!");
          console.log("Registrovani se!");
          break;
        }
      }
    }
  }

}
