import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionenComponent } from './optionen.component';

describe('OptionenComponent', () => {
  let component: OptionenComponent;
  let fixture: ComponentFixture<OptionenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionenComponent]
    });
    fixture = TestBed.createComponent(OptionenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
