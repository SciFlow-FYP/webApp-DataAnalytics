import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ConsoleComponent } from './common/console/console.component';
import { OutputPaneComponent } from './common/output-pane/output-pane.component';
import { ProgressBarComponent } from './common/progress-bar/progress-bar.component';
import { InvalidFileTypeComponent } from './components/combineCsvs/invalid-file-type/invalid-file-type.component';
import { SelectFilesComponent } from './components/combineCsvs/select-files/select-files.component';
import { DataCleaningComponent } from './components/selectWorkflow/data-cleaning/data-cleaning.component';
import { DataSelectionComponent } from './components/selectWorkflow/data-selection/data-selection.component';
import { DataTransformationComponent } from './components/selectWorkflow/data-transformation/data-transformation.component';
import { DataMiningComponent } from './components/selectWorkflow/data-mining/data-mining.component';
import { KnowledgePresentationComponent } from './components/selectWorkflow/knowledge-presentation/knowledge-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ConsoleComponent,
    OutputPaneComponent,
    ProgressBarComponent,
    InvalidFileTypeComponent,
    SelectFilesComponent,
    DataCleaningComponent,
    DataSelectionComponent,
    DataTransformationComponent,
    DataMiningComponent,
    KnowledgePresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
