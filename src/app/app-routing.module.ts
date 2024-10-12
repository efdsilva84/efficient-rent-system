import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from './carros/carros.component';
import { LocacoesComponent } from './locacoes/locacoes.component';
import { LoginComponent } from './login/login.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'carros', component: CarrosComponent},
  {path:'locacoes', component: LocacoesComponent},
  {path:'manutencao', component: ManutencaoComponent},
  {path:'financeiro', component: FinanceiroComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
