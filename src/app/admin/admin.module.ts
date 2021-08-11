import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { ProfilComponent } from './profil/profil.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from '../mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './user/update/update.component';
import { TitleComponent } from './_utlitaire/title/title.component';
import { DeleteComponent } from './_utlitaire/delete/delete.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfilComponent,
    UpdateComponent,
    DeleteComponent,
    TitleComponent,
    UpdateProfilComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class AdminModule { }
