import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruttiComponent } from './frutti.component';

describe('FruttiComponent', () => {
  let component: FruttiComponent;
  let fixture: ComponentFixture<FruttiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruttiComponent]
    });
    fixture = TestBed.createComponent(FruttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
