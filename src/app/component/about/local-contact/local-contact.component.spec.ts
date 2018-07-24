import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalContactComponent } from './local-contact.component';

describe('LocalContactComponent', () => {
  let component: LocalContactComponent;
  let fixture: ComponentFixture<LocalContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
