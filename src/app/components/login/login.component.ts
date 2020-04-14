import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../entities/korisnik';
import { KorisnikService } from '../../services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrovaniKorisnici: Array<Korisnik>;

  constructor(private korisnikService: KorisnikService) { 
    this.registrovaniKorisnici = this.korisnikService.loadKorisnike();
  }

  ngOnInit(): void {
  }

  login(emailInput, passwordInput) {
    console.log("E-mail je: " + emailInput.value + " Password je: " + passwordInput.value);
    
    for (let i = 0; i < this.registrovaniKorisnici.length; i++) {
      if(this.registrovaniKorisnici[i].getEmail() === emailInput.value && this.registrovaniKorisnici[i].getSifra() === passwordInput.value)
      {
        console.log("Login-ovani ste!");
        break;
      } else {
        console.log("Niste login-ovani!");
        break;
      }
    }
  }
  
}
