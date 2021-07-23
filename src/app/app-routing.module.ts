import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsPageComponent } from './pages/documents-page/documents-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';


const routes: Routes = [
  { path: '',   redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentsPageComponent },
  { path: 'configuration', component: ConfigurationPageComponent },
  { path: 'development', component: DevelopmentPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'reports', component: ReportsPageComponent },
  { path: 'playground', component: PlaygroundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
