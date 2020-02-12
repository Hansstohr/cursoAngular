import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular-feb12';
  boton = 'apretar';
  ingresoNuevo = 'hola';

  imprimirEnConsola() {
      console.log(this.ingresoNuevo) 

  }
  cambiarTitulo():void {
      this.title = 'curso Rojo';
      this.boton = 'cambio';
      this.ingresoNuevo = 'nuevo valor';
  }
}