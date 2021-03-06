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
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { KmeanParaModalComponent } from './components/workflow-components/kmean-para-modal/kmean-para-modal.component';
import { KnnParaModalComponent } from './components/workflow-components/knn-para-modal/knn-para-modal.component';
import { LinearregParaModalComponent } from './components/workflow-components/linearreg-para-modal/linearreg-para-modal.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { CombineCsvModalComponent } from './components/combineCsvs/combine-csv-modal/combine-csv-modal.component';
import { DropColumnsListComponent } from './components/workflow-components/data-cleaning/drop-columns-list/drop-columns-list.component';
import { DropRowsListComponent } from './components/workflow-components/data-cleaning/drop-rows-list/drop-rows-list.component';
import { DropColumnValuesModalComponent } from './components/workflow-components/data-selection/drop-rows-list/drop-column-values-modal/drop-column-values-modal.component';
import { SelectColumnsComponent } from './components/workflow-components/data-selection/select-columns/select-columns.component';
import { SelectRowsComponent } from './components/workflow-components/data-selection/select-rows/select-rows.component';
import { SelectRowValuesComponent } from './components/workflow-components/data-selection/select-rows/select-row-values/select-row-values.component';


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
    KnowledgePresentationComponent,
    KmeanParaModalComponent,
    KnnParaModalComponent,
    LinearregParaModalComponent,
    FileuploadComponent,
    PagenotfoundComponent,
    CombineCsvModalComponent,
    DropColumnsListComponent,
    DropRowsListComponent,
    DropColumnValuesModalComponent,
    SelectColumnsComponent,
    SelectRowsComponent,
    SelectRowValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxFileDropModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    NgxUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
