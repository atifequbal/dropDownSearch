# angular-dropdown-search

Angular dropdown search component built as a reusable Angular 22+ library.

Current version: `2.0.0`

## Code scaffolding

Run `ng generate component component-name --project angular-drop-down-search` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-drop-down-search`.
> Note: Don't forget to add `--project angular-drop-down-search` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-drop-down-search` to build the project. The build artifacts will be stored in the `dist/` directory.

## Usage

```ts
import { AngularDropDownSearchModule } from 'angular-dropdown-search';
```

```html
<lib-angular-drop-down-search
  [dropDownList]="items"
  displayField="itemName"
  label="Customer"
  placeholder="Search customers..."
  [clearable]="true"
  (selectedItem)="onSelectedItem($event)">
</lib-angular-drop-down-search>
```

The component emits the selected object when the typed value matches the configured display field, and emits `null` when the value is cleared or does not match.

## Publishing

After building your library with `ng build angular-drop-down-search`, go to the dist folder `cd dist/angular-drop-down-search` and run `npm publish`.

## Running unit tests

Run `ng test angular-drop-down-search` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Local demo

The repository-level demo app lives in `projects/demo` and is separate from this publishable library package.

From the repository root, run:

```bash
npm start
```

Open `http://127.0.0.1:4200/` to test the dropdown visually.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
