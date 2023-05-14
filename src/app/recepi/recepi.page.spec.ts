import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecepiPage } from './recepi.page';

describe('RecepiPage', () => {
  let component: RecepiPage;
  let fixture: ComponentFixture<RecepiPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(RecepiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
