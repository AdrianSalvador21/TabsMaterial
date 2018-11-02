import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Form module
import { FormsModule } from '@angular/forms';

//AnimationsAngular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

//Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabComponent } from './shared/tab/tab.component';
import { AsidebarComponent } from './shared/asidebar/asidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsidebarComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
