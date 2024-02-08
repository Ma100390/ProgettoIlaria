import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuIconSrc: string = 'assets/menu.webp';
  isMenuOpen = false;





 


  
  
  menuclick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIconSrc = this.isMenuOpen ? 'assets/arrow.webp' : 'assets/menu.webp';
  }
}
