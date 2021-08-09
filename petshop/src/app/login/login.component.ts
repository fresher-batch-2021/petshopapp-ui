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
  email:string="";
  password:string="";
  login(){
    if(this.password.length<8){
      alert("password must be 8 character")
    }
    else{
    alert("login successful")
    window.location.href = 'home';
    // alert("login button clicked")
  }
  }
 
}
