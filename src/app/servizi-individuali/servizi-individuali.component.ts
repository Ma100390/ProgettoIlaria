import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servizi-individuali',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servizi-individuali.component.html',
  styleUrl: './servizi-individuali.component.css'
})
export class ServiziIndividualiComponent {


  mostraServizi1() {
    const divServizi2 = document.getElementById('servizi-individuali');

    

    // Scorrimento della pagina verso il div
    if (divServizi2) {
        divServizi2.scrollIntoView({ behavior: 'smooth', block: 'start' });
       
    }
   
  }
  mostraServizi2() {
 
    const divServizi2 = document.getElementById('servizi-gruppo');

    // Scorrimento della pagina verso il div
    if (divServizi2) {
        divServizi2.scrollIntoView({ behavior: 'smooth', block: 'start' });
       
    }
  
  }
  mostraServizi3() {

  }
}
