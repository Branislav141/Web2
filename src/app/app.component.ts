import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean = true;
  register:boolean = true;


  showLogin(){
    this.login = !this.login;

    if(!this.register)
      this.register = true
  }

  showRegister(){
    this.register = !this.register;

    if(!this.login)
      this.login = true
  }

}
