import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AcademicComponent } from './components/academic/academic.component';
import { CompetencesComponent } from './components/academic/competences/competences.component';
import { StudiesComponent } from './components/academic/studies/studies.component';
import { CertificationsComponent } from './components/academic/certifications/certifications.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedService } from "./services/logged.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProjectComponent } from './components/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    AcademicComponent,
    CompetencesComponent,
    StudiesComponent,
    CertificationsComponent,
    LoginComponent,
    CreateProjectComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [LoggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
