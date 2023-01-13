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
import { CreateStudyComponent } from './components/create-study/create-study.component';
import { CreateCompetenceComponent } from './components/create-competence/create-competence.component';
import { CreateCertificationComponent } from './components/create-certification/create-certification.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectUpdateComponent } from './components/project-update/project-update.component';
import { CompetencesUpdateComponent } from './components/academic/competences-update/competences-update.component';
import { CertificationsUpdateComponent } from './components/academic/certifications-update/certifications-update.component';
import { StudiesUpdateComponent } from './components/academic/studies-update/studies-update.component';
import { CertificationsCardComponent } from './components/academic/certifications-card/certifications-card.component';
import { CompetencesCardComponent } from './components/academic/competences-card/competences-card.component';
import { StudiesCardComponent } from './components/academic/studies-card/studies-card.component';
import { FooterComponent } from './components/footer/footer.component';

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
    CreateProjectComponent,
    CreateStudyComponent,
    CreateCompetenceComponent,
    CreateCertificationComponent,
    ProjectCardComponent,
    ProjectUpdateComponent,
    CompetencesUpdateComponent,
    CertificationsUpdateComponent,
    StudiesUpdateComponent,
    CertificationsCardComponent,
    CompetencesCardComponent,
    StudiesCardComponent,
    FooterComponent,
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
