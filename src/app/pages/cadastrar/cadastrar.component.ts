import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormComponent } from "../../components/form/form.component";
import { SelecionarTipoComponent } from '../../components/selecionar-tipo/selecionar-tipo.component';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  imports: [FormComponent, SelecionarTipoComponent]
})
export class CadastrarComponent implements OnInit {
  registerForm: FormGroup;
  tipo: string | null = null; 

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onTipoSelecionado(tipo: string) {
    this.tipo = tipo;
  }

  ngOnInit(): void {}

  handleFormSubmit() {
    if (!this.tipo) {
      alert('Selecione se você é funcionário ou empresa antes de cadastrar!');
      return;
    }
 
    this.authService.register(
      this.registerForm.value.nome,
      this.registerForm.value.email,
      this.registerForm.value.senha,
      this.tipo
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
