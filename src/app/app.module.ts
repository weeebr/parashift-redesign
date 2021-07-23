import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './page-layout/header/header.component';
import { TabsComponent } from './page-layout/tabs/tabs.component';
import { NavComponent } from './page-layout/nav/nav.component';
import { ListQuickFiltersComponent } from './components/list/list-quick-filters/list-quick-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    TabsComponent,
    NavComponent,
    ListQuickFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
