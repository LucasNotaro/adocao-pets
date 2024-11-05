import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCachorroComponent } from './card-cachorro.component';

describe('CardCachorroComponent', () => {
  let component: CardCachorroComponent;
  let fixture: ComponentFixture<CardCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCachorroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
