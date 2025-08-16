import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/navbar/nav-bar/nav-bar.component';
import { RegisterComponent } from './pages/login-register/register/register.component';
import { LoginUserComponent } from './pages/login-register/login-user/login-user.component';
import { RegisterEstablishmentComponent } from './pages/login-register/register-establishment/register-establishment.component';
import { LoginEstablishmentComponent } from './pages/login-register/login-establishment/login-establishment.component';
import { BaseboardComponent } from './pages/baseboard/baseboard.component';
import { CardComponent } from './pages/card/card.component';
import { PreAgendamentoComponent } from './pages/pre-agendamento/pre-agendamento.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { PerfilUserComponent } from './pages/perfil-user/perfil-user.component';
import { ConfUserComponent } from './pages/conf-user/conf-user.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { CasaComponent } from './pages/casa/casa.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CardtelasComponent } from './pages/cardtelas/cardtelas.component';
import { NavComponent } from './pages/navbar/nav/nav.component';
import { EsqueciComponent } from './pages/esqueci/esqueci.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CardcasaComponent } from './pages/cardcasa/cardcasa.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { RodapeComponent } from './pages/rodape/rodape.component';

export const routes: Routes = [

    {
        path: '', component:HomeComponent
    },
     
    {
        path: 'register', component: RegisterComponent
    },

    {
        path: 'login-user', component: LoginUserComponent
    }, 
    {
        path: 'register-establishment', component: RegisterEstablishmentComponent
    },
    {
        path: 'login-establishment', component: LoginEstablishmentComponent
    },
    {
        path: 'baseboard', component: BaseboardComponent
    }, 
    {
        path: 'card', component: CardComponent
    },
    {
        path: 'pre-agendamento', component: PreAgendamentoComponent
    },
    {
        path: 'agendamento', component: AgendamentoComponent
    },
    {
        path: 'perfil-user', component: PerfilUserComponent
    },
    {
        path: 'perfil', component: PerfilUserComponent
    },
   {
        path: 'conf_user ' , component: ConfUserComponent
   },
   {
        path: 'equipe' , component: EquipeComponent
   },
   {
        path: 'casa', component:CasaComponent
   },
   {
        path: 'contato', component:ContatoComponent
   },
   {
       path: 'cardtelas', component:CardtelasComponent
   },
   {
       path: 'nav', component:NavComponent
   },
   {
      path: 'esqueci', component:EsqueciComponent
   },
   {
      path: 'sobre', component: SobreComponent
   },
   {
      path: 'cardcasa', component: CardcasaComponent
   },
   {
      path: 'planos', component: PlanosComponent
   },
   {
      path: 'rodape', component: RodapeComponent
   }

];
