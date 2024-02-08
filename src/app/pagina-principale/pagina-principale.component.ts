import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pagina-principale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-principale.component.html',
  styleUrl: './pagina-principale.component.css'
})
export class PaginaPrincipaleComponent {
  mostraH2 = true;
  isTextVisible: boolean = false;
  isRotated: boolean = false;
  previousScrollPosition: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.mostraH2 = scrollPosition < 50;
  }


  getAnimationStyle() {
    const scrollPosition = (window && window.scrollY) || (document && document.documentElement && document.documentElement.scrollTop) || 0;
    const animationProgress = this.mostraH2 ? Math.min(scrollPosition / 80, 1) : 0;

    const animationDuration = animationProgress > 0 ? `${Math.abs(animationProgress) * 600}s` : '0s';

    const transformValue = `translate(5%, 60%) scale(${1 + animationProgress * 3})`;
    const opacityValue = 1 - animationProgress;

    const finalOpacity = this.mostraH2 ? opacityValue : 0;

    // Controlla se lo scroll è verso l'alto o verso il basso
    const isScrollingUp = scrollPosition < this.previousScrollPosition;
    this.previousScrollPosition = scrollPosition;

    // Imposta lo z-index in base alla direzione dello scroll
    const zIndexValue = isScrollingUp ? 0 : 10;

    // Controlla se l'animazione è completata (quando l'opacità è 0)
    const shouldHide = finalOpacity === 0;

    return {
      'transform': transformValue,
      'opacity': finalOpacity,
      'animation': this.mostraH2 ? `slideIn ${animationDuration + 1002} ease-out` : 'none',
      'display': shouldHide ? 'none' : 'block', // Nascondi l'elemento quando l'animazione è completata
      'z-index': zIndexValue // Imposta lo z-index in base alla direzione dello scroll
    };
  }
  toggleText(): void {
    this.isTextVisible = !this.isTextVisible;
    this.isRotated = !this.isRotated;
  }

}
