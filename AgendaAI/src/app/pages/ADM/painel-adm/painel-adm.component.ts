import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ConfigComponent } from '../config/config.component';
import { EditorComponent } from '../editor/editor.component';
import { GerenciamentoComponent } from '../gerenciamento/gerenciamento.component';
import { ReclamacaoComponent } from '../reclamacao/reclamacao.component';
import { UsuarioComponent } from '../usuario/usuario.component';


@Component({
  selector: 'app-painel-adm',
  imports: [RouterLinkActive, RouterLink, ConfigComponent, EditorComponent,GerenciamentoComponent, ReclamacaoComponent, UsuarioComponent],
  templateUrl: './painel-adm.component.html',
  styleUrl: './painel-adm.component.css'
})
export class PainelAdmComponent {

}
