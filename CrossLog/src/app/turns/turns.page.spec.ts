import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurnsPage } from './turns.page';

describe('TurnsPage', () => {
  let component: TurnsPage;
  let fixture: ComponentFixture<TurnsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
