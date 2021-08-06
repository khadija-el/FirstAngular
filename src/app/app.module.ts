import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Users/user/user.component';
import { ProfilComponent } from './Profils/profil/profil.component';
import { MatModule } from './mat.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
