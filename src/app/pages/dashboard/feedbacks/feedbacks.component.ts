import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../../../components/form/form.component';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent {
  enviarFeedback: FormGroup<any>;
  feedbacks: any[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.enviarFeedback = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  ngOnInit() {
    this.carregarFeedbacks();
  }
  carregarFeedbacks() {
    this.authService.getFeedbacks().subscribe({
      next: (data) => {
        this.feedbacks = data.map(fb => ({
          ...fb,
          expanded: false
        }));
      },
      error: (err) => {
        console.error('Erro ao carregar feedbacks', err);
      }
    });
  }

  handleFormSubmit() {
    if (this.enviarFeedback.valid) {
      const { email, feedback } = this.enviarFeedback.value;
      this.authService.enviarFeedback(email, feedback).subscribe(
        response => {
          console.log('Feedback enviado com sucesso!', response);
          this.router.navigate(['/feedbacks']);
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