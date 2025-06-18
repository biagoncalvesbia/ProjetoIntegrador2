import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { RegisterComponent } from './pages/login-register/register/register.component';
import { LoginUserComponent } from './pages/login-register/login-user/login-user.component';
import { RegisterEstablishmentComponent } from './pages/login-register/register-establishment/register-establishment.component';
import { LoginEstablishmentComponent } from './pages/login-register/login-establishment/login-establishment.component';
import { BaseboardComponent } from './pages/baseboard/baseboard.component';
import { CardComponent } from './pages/card/card.component';
import { PreAgendamentoComponent } from './pages/pre-agendamento/pre-agendamento.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { PerfilUserComponent } from './pages/perfil-user/perfil-user.component';
import { ConfUserComponent } from './pages/conf-user/conf-user.component';


export const routes: Routes = [

    {
        path: '', component:HomeComponent
    },
     
    {
        path: 'nav-bar', component:NavBarComponent
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
        path: 'footer', component: FooterComponent
    },
    {
        path: 'perfil', component: PerfilUserComponent
    },
   {
        path: 'contatos', component: ContatosComponent
   },
   {
        path: 'sobre', component: SobreComponent
   },
   {
        path: 'equipe' , component: EquipeComponent
   },
   {
        path: 'conf_user ' , component: ConfUserComponent
   }

];
