import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lib-angular-drop-down-search',
  templateUrl: './angular-drop-down-search.component.html',
  styles: []
})
export class AngularDropDownSearchComponent implements OnInit {
  @Input() dropDownList = [];
  @Output() selectedItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  getSelectedItem(item){
    for(let i=0; i<this.dropDownList.length; i++){
      if(item === this.dropDownList[i].itemName){
        this.selectedItem.emit(this.dropDownList[i]);
      }
    }
  }
}
