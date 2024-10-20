import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacoesAtrasadasComponent } from './locacoes-atrasadas.component';

describe('LocacoesAtrasadasComponent', () => {
  let component: LocacoesAtrasadasComponent;
  let fixture: ComponentFixture<LocacoesAtrasadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocacoesAtrasadasComponent]
    });
    fixture = TestBed.createComponent(LocacoesAtrasadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
