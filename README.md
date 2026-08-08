# angular-dropdown-search

Angular dropdown search component for Angular 22+. Version 2 adds a cleaner UI, typed item output, configurable display fields, optional labels, disabled state, and a clear action.

![angular-dropdown-search list][1]
![angular-dropdown-search search][2]
![angular-dropdown-search selected][3]

## Installation

```bash
npm install angular-dropdown-search --save
```

## Version

Current version: `2.0.0`


## How To Use

Import the module in your Angular module:

```ts
import { AngularDropDownSearchModule } from 'angular-dropdown-search';
```

Use the component in your template:

```html
<lib-angular-drop-down-search
  [dropDownList]="items"
  displayField="itemName"
  label="Customer"
  placeholder="Search customers..."
  [clearable]="true"
  [disabled]="false"
  (searchValueChange)="onSearchValueChange($event)"
  (selectedItem)="onSelectedItem($event)">
</lib-angular-drop-down-search>
```

Sample list:

```ts
items = [
  { itemName: 'ABCD', otherFields: '' }
];
```

## API

| Input / Output | Type | Default | Description |
| --- | --- | --- | --- |
| `dropDownList` | `DropDownSearchItem[]` | `[]` | List of options to show in the dropdown. |
| `displayField` | `string` | `'itemName'` | Object field used as the visible option text. |
| `label` | `string` | `''` | Optional label shown above the input. |
| `placeholder` | `string` | `'Search...'` | Input placeholder text. |
| `disabled` | `boolean` | `false` | Disables the text input. |
| `clearable` | `boolean` | `true` | Shows a clear button when the input has a value. |
| `inputId` | `string` | auto-generated | HTML input ID. Override when wiring external labels. |
| `datalistId` | `string` | auto-generated | HTML datalist ID. Override only when you need a stable ID. |
| `searchValueChange` | `EventEmitter<string>` | - | Emits the current text as the user types. |
| `selectedItem` | `EventEmitter<DropDownSearchItem \| null>` | - | Emits the matched item, or `null` when no item matches. |

## UI Updates In V2

- Polished input shell with focus state and accessible clear button.
- Optional label and generated input/datalist IDs.
- Native browser datalist behavior kept lightweight, with styling applied to the visible search control.
- No Bootstrap class dependency required.

## Author

Md. Atif Equbal

## License

MIT


[1]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/list.png?raw=true
[2]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/listSearch.png?raw=true
[3]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/selected.png?raw=true
