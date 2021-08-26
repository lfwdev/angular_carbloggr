import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTbComponent } from './app-tb.component';

describe('AppTbComponent', () => {
  let component: AppTbComponent;
  let fixture: ComponentFixture<AppTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
