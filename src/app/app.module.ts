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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    CarrosComponent,
    LocacoesComponent,
    LoginComponent,
    ManutencaoComponent,
    FinanceiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
