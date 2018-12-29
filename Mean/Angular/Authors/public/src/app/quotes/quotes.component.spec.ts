import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { quotesComponent } from './quotes.component';

describe('quotesComponent', () => {
  let component: quotesComponent;
  let fixture: ComponentFixture<quotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ quotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(quotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
