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
  serviziVisibili1: boolean = false;
  serviziVisibili2: boolean = false;
  serviziVisibili3: boolean = false;

  mostraServizi1() {
    this.serviziVisibili1 = true;
    const divServizi2 = document.getElementById('servizi-individuali');

    // Scorrimento della pagina verso il div
    if (divServizi2) {
        divServizi2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  mostraServizi2() {
    this.serviziVisibili2 = true;
    const divServizi2 = document.getElementById('servizi-gruppo');

    // Scorrimento della pagina verso il div
    if (divServizi2) {
        divServizi2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  mostraServizi3() {
    this.serviziVisibili3 = true;
  }
}
