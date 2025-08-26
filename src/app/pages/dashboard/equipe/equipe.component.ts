import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  funcionarios = [
    {nome: 'Alice', email: 'alicecu@gmail.com', cargo: 'Desenvolvedora Front-end', telefone: '(11) 91234-5678'},
    {nome: 'Bruno', email: 'brunobizonho@gmail.com', cargo: 'Desenvolvedor Back-end', telefone: '(11) 92345-6789'},
    {nome: 'Paulo', email: 'paulo@gmail.com', cargo: 'Designer UX/UI', telefone: '(11) 93456-7890'},
  ];

}
