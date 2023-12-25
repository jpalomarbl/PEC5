import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'my-header',
  standalone: true,
  imports: [],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css'
})
export class MyHeaderComponent {
  constructor(private sharedService: SharedService) {}

  emitirEventoAlPadre(state: string) {
    this.sharedService.emitirEvento(state);
  }
  toggleNewTemplate() {
    this.emitirEventoAlPadre('template');
  }

  toggleNewReactive() {
    this.emitirEventoAlPadre('reactive');
  }
}
