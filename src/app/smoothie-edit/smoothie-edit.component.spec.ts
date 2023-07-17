import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieEditComponent } from './smoothie-edit.component';

describe('SmoothieEditComponent', () => {
  let component: SmoothieEditComponent;
  let fixture: ComponentFixture<SmoothieEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmoothieEditComponent]
    });
    fixture = TestBed.createComponent(SmoothieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
