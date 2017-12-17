import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemFormComponent } from './catalog-item-form.component';

describe('CatalogItemFormComponent', () => {
  let component: CatalogItemFormComponent;
  let fixture: ComponentFixture<CatalogItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
