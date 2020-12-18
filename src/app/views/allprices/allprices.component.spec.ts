import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpricesComponent } from './allprices.component';

describe('AllpricesComponent', () => {
  let component: AllpricesComponent;
  let fixture: ComponentFixture<AllpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
