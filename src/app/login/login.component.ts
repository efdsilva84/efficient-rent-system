import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean = false;


  constructor(private router: Router){

  }


  dadosForm = new FormGroup({
    cpf: new FormControl(null),
    senha: new FormControl(null),
  });



  signIn(){
    this.isLoading = true;
    console.log(this.dadosForm.value);
    localStorage.setItem('user', 'Leandro Vinicius');
    this.router.navigate(['home'])


  }

}
