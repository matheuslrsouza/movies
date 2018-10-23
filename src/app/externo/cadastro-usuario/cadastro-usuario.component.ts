import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public formCadastro: FormGroup;

  constructor(private service: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    let usuario = new Usuario();

    this.formCadastro = this.formBuilder.group({
      id: [usuario.id, []],
      usuario: [usuario.usuario, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6)
      ]],
      email: [usuario.email, [
        Validators.required,
        Validators.maxLength(100),
        Validators.email
      ]],
      senha: [usuario.senha, [
        Validators.required, 
        Validators.maxLength(50),
        Validators.minLength(6)
      ]]
    });
  }

  public cadastrar(usuario: Usuario) {
    this.service.cadastrar(usuario).subscribe(() => {
      this.service.logar(usuario).subscribe(token => {
        this.service.setToken(token);
        this.router.navigate(['/interno/inicio']);
      });
    });
  }
}
