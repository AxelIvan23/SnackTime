import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixcomponentComponent } from './sixcomponent.component';

describe('SixcomponentComponent', () => {
  let component: SixcomponentComponent;
  let fixture: ComponentFixture<SixcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
