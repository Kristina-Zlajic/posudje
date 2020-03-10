import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFirstPageComponent } from './the-first-page.component';

describe('TheFirstPageComponent', () => {
  let component: TheFirstPageComponent;
  let fixture: ComponentFixture<TheFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
