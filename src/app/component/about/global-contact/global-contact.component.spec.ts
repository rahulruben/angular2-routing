import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalContactComponent } from './global-contact.component';

describe('GlobalContactComponent', () => {
  let component: GlobalContactComponent;
  let fixture: ComponentFixture<GlobalContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
