import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieComponent } from './smoothie.component';

describe('SmoothieComponent', () => {
  let component: SmoothieComponent;
  let fixture: ComponentFixture<SmoothieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmoothieComponent]
    });
    fixture = TestBed.createComponent(SmoothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
