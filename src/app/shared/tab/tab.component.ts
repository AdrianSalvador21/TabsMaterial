import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs = [];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean, valor:string) {
    if(!this.tabs.includes(valor)){
      this.tabs.push(valor);
      this.selected.setValue(this.tabs.length - 1);
    }else{
      this.selected.setValue(this.tabs.indexOf(valor))
    }

    if (selectAfterAdding) {
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }



  ngOnInit() {
  }

}
