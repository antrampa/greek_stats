import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTourismComponent } from './table-tourism.component';

describe('TableTourismComponent', () => {
  let component: TableTourismComponent;
  let fixture: ComponentFixture<TableTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTourismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
