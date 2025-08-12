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
import { SobreComponent } from './pages/sobre/sobre.component';
import { PerfilUserComponent } from './pages/perfil-user/perfil-user.component';
import { ConfUserComponent } from './pages/conf-user/conf-user.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CasaComponent } from './pages/casa/casa.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CardtelasComponent } from './pages/cardtelas/cardtelas.component';
import { NavComponent } from './pages/nav/nav.component';
import { PainelAdmComponent } from './pages/ADM/painel-adm/painel-adm.component';
import { UsuarioComponent } from './pages/ADM/usuario/usuario.component';
import { ReclamacaoComponent } from './pages/ADM/reclamacao/reclamacao.component';
import { GerenciamentoComponent } from './pages/ADM/gerenciamento/gerenciamento.component';
import { EditorComponent } from './pages/ADM/editor/editor.component';
import { ConfigComponent } from './pages/ADM/config/config.component';


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
        path: 'sobre', component: SobreComponent
   },
   {
        path: 'conf_user ' , component: ConfUserComponent
   },
   {
        path: 'equipe' , component: EquipeComponent
   },
   {
        path: 'footer', component: FooterComponent
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
        path: 'adm',  component:PainelAdmComponent
    },
    {
        path: 'usuario', component:UsuarioComponent
    },
    {
        path: 'reclamacao', component:ReclamacaoComponent
    },
    {
        path: 'gerenciamento', component: GerenciamentoComponent
    },
    {
        path: 'editor' , component: EditorComponent
    },
    {
        path: 'config', component: ConfigComponent
    }

];
