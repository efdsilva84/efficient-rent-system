import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './carros/carros.component';
import { LocacoesComponent } from './locacoes/locacoes.component';
import { LoginComponent } from './login/login.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LocacoesAtrasadasComponent } from './locacoes/locacoes-atrasadas/locacoes-atrasadas.component';
import { HomeComponent } from './home/home.component';
import { BoletosComponent } from './boletos/boletos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ControleComponent } from './controle/controle.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'carros', component: CarrosComponent},
  {path:'locacoes', component: LocacoesComponent},
  {path:'manutencao', component: ManutencaoComponent},
  {path:'financeiro', component: FinanceiroComponent},
  {path:'locacoes/locacoes-atrasadas', component: LocacoesAtrasadasComponent},
  {path: 'home', component: HomeComponent},
  {path:'boletos', component: BoletosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'estoque', component: EstoqueComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'relatorios', component: RelatoriosComponent},
  {path: 'controles', component: ControleComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
