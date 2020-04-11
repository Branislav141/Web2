import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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
  }

}
