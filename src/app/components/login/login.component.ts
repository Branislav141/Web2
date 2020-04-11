import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(emailInput, passwordInput) {
    console.log("E-mail je: " + emailInput.value + " Password je: " +passwordInput.value);
  }

}
