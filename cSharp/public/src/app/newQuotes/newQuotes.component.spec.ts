import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newQuotesComponent } from './newQuotes.component';

describe('newQuotesComponent', () => {
  let component: newQuotesComponent;
  let fixture: ComponentFixture<newQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ newQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(newQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
