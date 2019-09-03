import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkflowComponentsComponent } from './components/workflow-components/workflow-components.component';

const routes: Routes = [
  {
    path: 'webApp',
    component: HomeComponent,
    children: [
      { path: 'workflow', component: WorkflowComponentsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
