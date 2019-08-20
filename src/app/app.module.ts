import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewProjectModalComponent,
    InputPaneComponent,
    OutputPaneComponent,
    MissingHeaderRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxFileDropModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
