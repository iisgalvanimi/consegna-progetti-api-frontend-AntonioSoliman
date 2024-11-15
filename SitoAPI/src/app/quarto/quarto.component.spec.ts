import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponent } from './quarto.component';

describe('QuartoComponent', () => {
  let component: QuartoComponent;
  let fixture: ComponentFixture<QuartoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoComponent]
    });
    fixture = TestBed.createComponent(QuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
