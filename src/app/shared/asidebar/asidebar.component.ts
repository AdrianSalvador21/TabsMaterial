import { Component, ViewChild  } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent{

  @ViewChild(TabComponent) comunicacion: TabComponent;

  pages2:any = {
    pages: ['Page 1', 'Page 2'],
    more: ['Page 3', 'Page 4'],
    other: ['Page 5', 'Page 6']
  }

  constructor() { }


  incluirTab(valor){
    this.comunicacion.addTab(true, valor);
  }


}
