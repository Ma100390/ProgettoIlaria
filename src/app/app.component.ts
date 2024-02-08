import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, MenuComponent]
})
export class AppComponent {

}
