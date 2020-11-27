import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFinancialsComponent } from './stock-financials.component';

describe('StockFinancialsComponent', () => {
  let component: StockFinancialsComponent;
  let fixture: ComponentFixture<StockFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockFinancialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
