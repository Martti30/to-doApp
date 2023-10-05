import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrysetComponent } from './entryset.component';

describe('EntrysetComponent', () => {
  let component: EntrysetComponent;
  let fixture: ComponentFixture<EntrysetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrysetComponent]
    });
    fixture = TestBed.createComponent(EntrysetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
