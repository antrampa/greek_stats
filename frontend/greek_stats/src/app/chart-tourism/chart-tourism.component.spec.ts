import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTourismComponent } from './chart-tourism.component';

describe('ChartTourismComponent', () => {
  let component: ChartTourismComponent;
  let fixture: ComponentFixture<ChartTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
