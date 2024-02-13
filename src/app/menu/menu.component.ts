import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  menuIconSrc: string = 'assets/menu.webp';
 
  isMenuOpen: boolean = false;
  cities: string[] = ['Firenze', 'Siena', 'Lucca'];
  currentCity: string = this.cities[0];
  cityIndex: number = 0;
  ngOnInit(): void {
    setInterval(() => this.changeCity(), 5000);
  }
  changeCity(): void {
    this.cityIndex = (this.cityIndex + 1) % this.cities.length;
    this.currentCity = this.cities[this.cityIndex];
  }
  closeMenu() {
      this.isMenuOpen = false;
  }

  menuclick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIconSrc = this.isMenuOpen ? 'assets/arrow.webp' : 'assets/menu.webp';
  }
}
