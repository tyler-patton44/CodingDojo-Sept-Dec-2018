import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productsHomeComponent } from './productsHome.component';

describe('productsHomeComponent', () => {
  let component: productsHomeComponent;
  let fixture: ComponentFixture<productsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
