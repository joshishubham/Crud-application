import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponseBase,  HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';

//Service model
import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    CreateComponent,
    ListComponent,
    MenuComponent,
    DetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
