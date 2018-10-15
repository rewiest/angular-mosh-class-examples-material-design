
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressComponent } from './progress/progress.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableHttpComponent } from './table-http/table-http.component';
import { DataTablePlusComponent } from './data-table-plus/data-table-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    SelectComponent,
    InputComponent,
    TextareaComponent,
    DatepickerComponent,
    IconsComponent,
    ButtonComponent,
    ChipsComponent,
    ProgressComponent,
    TooltipsComponent,
    TabsComponent,
    DialogComponent,
    EditCourseComponent,
    DataTableComponent,
    MainNavComponent,
    DashboardComponent,
    TableHttpComponent,
    DataTablePlusComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
