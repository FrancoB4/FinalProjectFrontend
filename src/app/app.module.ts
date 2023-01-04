import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
