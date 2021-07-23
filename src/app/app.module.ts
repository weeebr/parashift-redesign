import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './page-layout/header/header.component';
import { TabsComponent } from './page-layout/tabs/tabs.component';
import { NavComponent } from './page-layout/nav/nav.component';
import { ListQuickFiltersComponent } from './components/list/list-quick-filters/list-quick-filters.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    TabsComponent,
    NavComponent,
    ListQuickFiltersComponent,
    PlaygroundPageComponent,
    ConfigurationPageComponent,
    DevelopmentPageComponent,
    ReportsPageComponent,
    SettingsPageComponent,
    DocumentsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
