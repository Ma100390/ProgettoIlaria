import { Routes } from '@angular/router';
import { DoveSiamoComponent } from './dove-siamo/dove-siamo.component';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { ServiziIndividualiComponent } from './servizi-individuali/servizi-individuali.component';
export const routes: Routes = [
    { path: '', component: PaginaPrincipaleComponent },
    { path: 'Dove-Siamo', component: DoveSiamoComponent },
    { path: 'Servizi-individuali', component: ServiziIndividualiComponent}
];
