import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormComponent],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      senha: ['']
    });
  }

  ngOnInit(): void {
    // Se o usuário já estiver autenticado, redireciona automaticamente para o dashboard
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  handleFormSubmit() {
    if (this.loginForm.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }
  
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.senha
    ).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        alert('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err); 
        alert(err.error?.error || 'Erro ao fazer login!');
      }
    });
  }
}
