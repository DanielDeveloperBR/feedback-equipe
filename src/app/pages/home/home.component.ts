import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeaderComponent, FooterComponent, CommonModule]
})
export class HomeComponent {
  usersList: any[] = []
  constructor(public users: AuthService) { }

  ngOnInit(){
  this.mostrarUsers()
}

mostrarUsers() {
  this.users.mostrarUsers().subscribe({
    next: (data: any) => {
      this.usersList = data.sucess
    },
    error: (err) => {
      console.error("Erro ao buscar usuários:", err);
    }
  });
}

  
}
