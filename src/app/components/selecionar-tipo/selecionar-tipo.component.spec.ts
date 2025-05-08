import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarTipoComponent } from './selecionar-tipo.component';

describe('SelecionarTipoComponent', () => {
  let component: SelecionarTipoComponent;
  let fixture: ComponentFixture<SelecionarTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecionarTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
