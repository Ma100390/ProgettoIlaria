import { Routes } from '@angular/router';
import { PaginaPrincipaleComponent } from './pagina-principale/pagina-principale.component';
import { ServiziIndividualiComponent } from './servizi-individuali/servizi-individuali.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziOnlineComponent } from './servizi-online/servizi-online.component';
export const routes: Routes = [
    { path: '', component: PaginaPrincipaleComponent },
    { path: 'Servizi-individuali', component: ServiziIndividualiComponent},
    { path: 'Contatti', component: ContattiComponent},
    { path: 'Servizi-Online', component: ServiziOnlineComponent}
];
