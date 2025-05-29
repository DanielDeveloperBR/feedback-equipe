import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../../../components/form/form.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [ FormComponent],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  enviarFeedback: FormGroup<any>;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.enviarFeedback = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  handleFormSubmit() {
    if (this.enviarFeedback.valid) {
      const { email, feedback } = this.enviarFeedback.value;
      this.authService.enviarFeedback(email, feedback).subscribe(
        response => {
          console.log('Feedback enviado com sucesso!', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Erro ao enviar feedback', error);
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }

}
