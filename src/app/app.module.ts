import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { AcademicComponent } from './components/academic/academic.component';
import { CompetencesComponent } from './components/academic/competences/competences.component';
import { StudiesComponent } from './components/academic/studies/studies.component';
import { CertificationsComponent } from './components/academic/certifications/certifications.component';
import { LoginComponent } from './components/login/login.component';
import {LoggedService} from "./services/logged.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    AcademicComponent,
    CompetencesComponent,
    StudiesComponent,
    CertificationsComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [LoggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
