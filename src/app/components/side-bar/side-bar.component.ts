import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  menuOpen = false;
  constructor(private router: Router, private authService: AuthService){}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}