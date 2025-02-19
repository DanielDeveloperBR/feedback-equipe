import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  imports: [FormComponent]
})
export class CadastrarComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  // A função onSubmit agora não é chamada diretamente do FormComponent
  handleFormSubmit() {
 
    this.authService.register(
      this.registerForm.value.nome,
      this.registerForm.value.email,
      this.registerForm.value.senha
    ).subscribe({
      next: (res) => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.status === 400 && err.error?.message?.includes('550 5.1.1')) {
          alert('O e-mail informado não existe. Verifique e tente novamente.');
        } else {
          alert(err.error.error || 'Erro ao cadastrar');
        }
      }
    });
  }
}
