import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginacamaraPage } from './paginacamara.page';

describe('PaginacamaraPage', () => {
  let component: PaginacamaraPage;
  let fixture: ComponentFixture<PaginacamaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
