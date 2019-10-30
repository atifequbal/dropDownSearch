# angular-dropdown-search

Angular-Dropdown-Search component is an angular component which helps you to populate the data in a dropdown along with a search option.


## Installation

`npm install angular-dropdown-search --save`


## HOW TO USE

`import {AngularDropDownSearchComponent} from "./lib/angular-drop-down-search"`;

`<lib-angular-drop-down-search 
    [dropDownList]="PASS_ARRAY_LIST" 
    (selectedItem)="YOUR_FUNCTION($event)">
 </lib-angular-drop-down-search>`

Sample ArrayList: [{itemName:'ABCD', otherFileds:''}]
