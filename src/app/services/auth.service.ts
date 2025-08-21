import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  register(nome: string, email: string, senha: string, tipo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nome, email, senha, tipo });
  }

  enviarFeedback(email: string, feedback: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/feedback`, { email, feedback });
  }

  getFeedbacks() {
    return this.http.get<any[]>(`${this.apiUrl}/feedbacks`);
  }
  

  saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout(): void {
    
    sessionStorage.removeItem('token');
  }

  // Verifica se o token está presente e se é válido
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiration = payload.exp * 1000;

    return expiration > Date.now();
  }
}
