import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorrosListaComponent } from './cachorros-lista.component';

describe('CachorrosListaComponent', () => {
  let component: CachorrosListaComponent;
  let fixture: ComponentFixture<CachorrosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CachorrosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachorrosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
