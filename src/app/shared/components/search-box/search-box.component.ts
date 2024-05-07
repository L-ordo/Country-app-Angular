import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})

export class SearchBoxComponent {

@Input()

public placeholder: string = ''; // Texto de marcador de posición para el cuadro de búsqueda


@Output() // Evento de salida
public onValue = new EventEmitter<string>(); // Evento que se emite cuando cambia el valor del cuadro de búsqueda

 // Método para emitir el evento con el valor especificado
emitValue( value: string ):void{
  this.onValue.emit( value ); // Método para emitir el evento con el valor especificado
}

}
