import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private authService: AuthService, private router: Router){}
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

   
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  logout(): void {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
