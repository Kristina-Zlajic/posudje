import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishBrandsComponent } from './dish-brands.component';

describe('DishBrandsComponent', () => {
  let component: DishBrandsComponent;
  let fixture: ComponentFixture<DishBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
