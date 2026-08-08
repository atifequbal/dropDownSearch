import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularDropDownSearchComponent } from './angular-drop-down-search.component';
import { AngularDropDownSearchModule } from './angular-drop-down-search.module';

describe('AngularDropDownSearchComponent', () => {
  let component: AngularDropDownSearchComponent;
  let fixture: ComponentFixture<AngularDropDownSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AngularDropDownSearchModule]
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

  it('should render the list options using itemName by default', () => {
    fixture.componentRef.setInput('dropDownList', [
      { itemName: 'Alpha' },
      { itemName: 'Beta' }
    ]);

    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll('option');
    expect(options.length).toBe(2);
    expect(options[0].value).toBe('Alpha');
    expect(options[1].value).toBe('Beta');
  });

  it('should emit the matching selected item', () => {
    const selected = { itemName: 'Beta', id: 2 };
    spyOn(component.selectedItem, 'emit');
    component.dropDownList = [
      { itemName: 'Alpha', id: 1 },
      selected
    ];

    component.getSelectedItem('Beta');

    expect(component.selectedItem.emit).toHaveBeenCalledWith(selected);
  });

  it('should emit null when no item matches', () => {
    spyOn(component.selectedItem, 'emit');
    component.dropDownList = [
      { itemName: 'Alpha' }
    ];

    component.getSelectedItem('Unknown');

    expect(component.selectedItem.emit).toHaveBeenCalledWith(null);
  });

  it('should support a custom display field', () => {
    fixture.componentRef.setInput('displayField', 'name');
    fixture.componentRef.setInput('dropDownList', [
      { name: 'Custom label' }
    ]);

    fixture.detectChanges();

    const option = fixture.nativeElement.querySelector('option');
    expect(option.value).toBe('Custom label');
  });

  it('should handle an empty list', () => {
    spyOn(component.selectedItem, 'emit');
    component.dropDownList = [];

    component.getSelectedItem('Anything');

    expect(component.selectedItem.emit).toHaveBeenCalledWith(null);
  });

  it('should render an optional label and custom placeholder', () => {
    fixture.componentRef.setInput('label', 'Choose item');
    fixture.componentRef.setInput('placeholder', 'Find an item');

    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector('.ads-label');
    const input = fixture.nativeElement.querySelector('.ads-input');
    expect(label.textContent.trim()).toBe('Choose item');
    expect(input.placeholder).toBe('Find an item');
  });

  it('should emit search value changes while typing', () => {
    spyOn(component.searchValueChange, 'emit');

    component.onSearchInput('Alpha');

    expect(component.searchValue).toBe('Alpha');
    expect(component.searchValueChange.emit).toHaveBeenCalledWith('Alpha');
  });

  it('should clear the current value and emit null', () => {
    const input = document.createElement('input');
    input.value = 'Alpha';
    component.searchValue = 'Alpha';
    spyOn(component.searchValueChange, 'emit');
    spyOn(component.selectedItem, 'emit');
    spyOn(input, 'focus');

    component.clearSelection(input);

    expect(input.value).toBe('');
    expect(component.searchValue).toBe('');
    expect(component.searchValueChange.emit).toHaveBeenCalledWith('');
    expect(component.selectedItem.emit).toHaveBeenCalledWith(null);
    expect(input.focus).toHaveBeenCalled();
  });
});
