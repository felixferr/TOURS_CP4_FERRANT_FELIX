import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntoogleComponent } from './dropdowntoogle.component';

describe('DropdowntoogleComponent', () => {
  let component: DropdowntoogleComponent;
  let fixture: ComponentFixture<DropdowntoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowntoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowntoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
