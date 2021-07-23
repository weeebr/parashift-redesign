import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuickFiltersComponent } from './list-quick-filters.component';

describe('ListQuickFiltersComponent', () => {
  let component: ListQuickFiltersComponent;
  let fixture: ComponentFixture<ListQuickFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuickFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuickFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
