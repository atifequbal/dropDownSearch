import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DropDownSearchItem {
  [key: string]: unknown;
}

@Component({
  selector: 'lib-angular-drop-down-search',
  templateUrl: './angular-drop-down-search.component.html',
  standalone: false,
  styles: [`
    :host {
      display: block;
      color: #1f2937;
      font-family: inherit;
    }

    .ads-field {
      display: grid;
      gap: 6px;
      width: 100%;
    }

    .ads-label {
      color: #374151;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
    }

    .ads-control {
      align-items: center;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
      display: grid;
      gap: 8px;
      grid-template-columns: 18px minmax(0, 1fr) 28px;
      min-height: 42px;
      padding: 0 8px 0 12px;
      transition: border-color 140ms ease, box-shadow 140ms ease, background-color 140ms ease;
    }

    .ads-control:focus-within {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.14), 0 1px 2px rgba(15, 23, 42, 0.06);
    }

    .ads-field--disabled .ads-control {
      background: #f8fafc;
      color: #94a3b8;
      cursor: not-allowed;
    }

    .ads-search-icon {
      border: 2px solid #64748b;
      border-radius: 50%;
      box-sizing: border-box;
      display: block;
      height: 14px;
      position: relative;
      width: 14px;
    }

    .ads-search-icon::after {
      background: #64748b;
      border-radius: 999px;
      content: '';
      height: 2px;
      position: absolute;
      right: -6px;
      top: 10px;
      transform: rotate(45deg);
      width: 7px;
    }

    .ads-input {
      background: transparent;
      border: 0;
      color: #111827;
      font: inherit;
      min-width: 0;
      outline: 0;
      padding: 10px 0;
      width: 100%;
    }

    .ads-input::placeholder {
      color: #94a3b8;
    }

    .ads-input:disabled {
      color: #94a3b8;
      cursor: not-allowed;
    }

    .ads-clear {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 6px;
      color: #64748b;
      cursor: pointer;
      display: inline-flex;
      font-size: 20px;
      height: 28px;
      justify-content: center;
      line-height: 1;
      padding: 0;
      width: 28px;
    }

    .ads-clear:hover,
    .ads-clear:focus-visible {
      background: #e2e8f0;
      color: #0f172a;
      outline: 0;
    }

    .ads-clear[hidden] {
      display: none;
    }
  `]
})
export class AngularDropDownSearchComponent implements OnInit {
  private static nextId = 0;

  @Input() dropDownList: DropDownSearchItem[] = [];
  @Input() displayField = 'itemName';
  @Input() label = '';
  @Input() placeholder = 'Search...';
  @Input() disabled = false;
  @Input() clearable = true;
  @Input() inputId = `dropDownSearchInput-${AngularDropDownSearchComponent.nextId}`;
  @Input() datalistId = `dropDownList-${AngularDropDownSearchComponent.nextId++}`;
  @Output() selectedItem = new EventEmitter<DropDownSearchItem | null>();
  @Output() searchValueChange = new EventEmitter<string>();

  searchValue = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchInput(value: string): void {
    this.searchValue = value;
    this.searchValueChange.emit(value);
  }

  getSelectedItem(value: string): void {
    this.searchValue = value;
    const selected = this.dropDownList.find((item) => this.getDisplayValue(item) === value);
    this.selectedItem.emit(selected || null);
  }

  clearSelection(input: HTMLInputElement): void {
    input.value = '';
    this.searchValue = '';
    this.searchValueChange.emit('');
    this.selectedItem.emit(null);
    input.focus();
  }

  getDisplayValue(item: DropDownSearchItem): string {
    const value = item[this.displayField];
    return value === null || value === undefined ? '' : String(value);
  }
}
