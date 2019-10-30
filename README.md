# angular-dropdown-search

Angular-Dropdown-Search component is an angular component which helps you to populate the data in a dropdown along with a search option.

![angular-dropdown-search][1]
![angular-dropdown-search][2]
![angular-dropdown-search][3]

## Installation

`npm install angular-dropdown-search --save`


## How To Use

`import {AngularDropDownSearchComponent} from "angular-dropdown-search/projects/angular-drop-down-search/src/lib/angular-drop-down-search.component"`;

`<lib-angular-drop-down-search 
[dropDownList]="PASS_ARRAY_LIST" 
(selectedItem)="YOUR_FUNCTION($event)">
 </lib-angular-drop-down-search>`

Sample ArrayList: [{itemName:'ABCD', otherFileds:''}]

## Author

Atif Equbal

## License

MIT


[1]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/list.png?raw=true
[2]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/listSearch.png?raw=true
[3]: https://github.com/atifequbal/dropDownSearch/blob/master/projects/angular-drop-down-search/src/screenshot/selected.png?raw=true
