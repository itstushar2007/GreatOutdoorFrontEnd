import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteProductComponent } from './search-delete-product.component';

describe('SearchDeleteProductComponent', () => {
  let component: SearchDeleteProductComponent;
  let fixture: ComponentFixture<SearchDeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeleteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
