import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NewProjectModalComponent } from './components/home/new-project-modal/new-project-modal.component';
import { InputPaneComponent } from './components/input-pane/input-pane.component';
import { OutputPaneComponent } from './components/output-pane/output-pane.component';
import { MissingHeaderRowComponent } from './components/input-pane/missing-header-row/missing-header-row.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleComponent } from './common/console/console.component';
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';
import { InvalidFileTypeComponent } from './components/combineCsvs/invalid-file-type/invalid-file-type.component';
import { SelectFilesComponent } from './components/combineCsvs/select-files/select-files.component';
import { WorkflowComponentsComponent } from './components/workflow-components/workflow-components.component';
import { DataCleaningComponent } from './components/workflow-components/data-cleaning/data-cleaning.component';
import { DataSelectionComponent } from './components/workflow-components/data-selection/data-selection.component';
import { DataTransformationComponent } from './components/workflow-components/data-transformation/data-transformation.component';
import { DataMiningComponent } from './components/workflow-components/data-mining/data-mining.component';
import { KnowledgePresentationComponent } from './components/workflow-components/knowledge-presentation/knowledge-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewProjectModalComponent,
    InputPaneComponent,
    MissingHeaderRowComponent,
    ConsoleComponent,
    OutputPaneComponent,
    ProgressBarComponent,
    InvalidFileTypeComponent,
    SelectFilesComponent,
    WorkflowComponentsComponent,
    DataCleaningComponent,
    DataSelectionComponent,
    DataTransformationComponent,
    DataMiningComponent,
    KnowledgePresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxFileDropModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
