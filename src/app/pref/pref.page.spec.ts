import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrefPage } from './pref.page';

describe('PrefPage', () => {
  let component: PrefPage;
  let fixture: ComponentFixture<PrefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
