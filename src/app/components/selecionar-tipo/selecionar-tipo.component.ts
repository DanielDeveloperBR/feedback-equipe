import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selecionar-tipo',
  standalone: true,
  imports: [],
  templateUrl: './selecionar-tipo.component.html',
  styleUrl: './selecionar-tipo.component.css'
})
export class SelecionarTipoComponent {
  @Output() tipoSelecionado = new EventEmitter<string>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tipoSelecionado.emit(input.value);  // Emite o valor para o pai
  }
}
