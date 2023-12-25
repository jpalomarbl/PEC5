import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  eventoHijo = new EventEmitter<any>();

  emitirEvento(data: any) {
    this.eventoHijo.emit(data);
  }
}
