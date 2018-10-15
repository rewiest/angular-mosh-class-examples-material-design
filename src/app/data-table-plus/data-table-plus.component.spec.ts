import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePlusComponent } from './data-table-plus.component';

describe('DataTablePlusComponent', () => {
  let component: DataTablePlusComponent;
  let fixture: ComponentFixture<DataTablePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTablePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
