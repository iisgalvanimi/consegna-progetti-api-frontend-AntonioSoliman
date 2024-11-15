import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponent } from './quinto.component';

describe('QuintoComponent', () => {
  let component: QuintoComponent;
  let fixture: ComponentFixture<QuintoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuintoComponent]
    });
    fixture = TestBed.createComponent(QuintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
