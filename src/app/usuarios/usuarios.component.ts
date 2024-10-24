import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  constructor(private toast: ToastService){

  }










  dadosForm = new FormGroup({
    nome: new FormControl(null),
    cpf: new FormControl(null),
    senha: new FormControl(null),
    setor: new FormControl(null),
    mt: new FormControl(null),
    perfil: new FormControl(null),
    celular: new FormControl(null),
  });


  async signIn(){
    console.log('fomrulario', this.dadosForm.value);
    this.dadosForm.reset();
    this.toast.showSuccess('Cadastro Realizado', 'Sucess');


  }

}
