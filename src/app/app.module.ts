import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { CarrosComponent } from './carros/carros.component';
import { LocacoesComponent } from './locacoes/locacoes.component';
import { LoginComponent } from './login/login.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { LocacoesAtrasadasComponent } from './locacoes/locacoes-atrasadas/locacoes-atrasadas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { BoletosComponent } from './boletos/boletos.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ControleComponent } from './controle/controle.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { MultasComponent } from './multas/multas.component';
import { JuridicoComponent } from './juridico/juridico.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    CarrosComponent,
    LocacoesComponent,
    LoginComponent,
    ManutencaoComponent,
    FinanceiroComponent,
    SublevelMenuComponent,
    LocacoesAtrasadasComponent,
    LoaderComponent,
    HomeComponent,
    ClientesComponent,
    BoletosComponent,
    EstoqueComponent,
    UsuariosComponent,
    ControleComponent,
    RelatoriosComponent,
    MultasComponent,
    JuridicoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
