import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDropDownSearchComponent } from './angular-drop-down-search.component';

describe('AngularDropDownSearchComponent', () => {
  let component: AngularDropDownSearchComponent;
  let fixture: ComponentFixture<AngularDropDownSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDropDownSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDropDownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
