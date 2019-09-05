import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkflowComponentsComponent } from './components/workflow-components/workflow-components.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: 'webApp',
    component: HomeComponent,
    children: [
      { path: 'input', component: FileuploadComponent},
      { path: 'workflow', component: WorkflowComponentsComponent}
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
