import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { ErrorInterceptor } from "./auth/_helpers/error.interceptor";
import { JwtInterceptor} from "./auth/_helpers/jwt.interceptor";
import { HomeComponent} from "./home/home.component";
import { LoginComponent} from "./auth/login/login.component";
import { ListComponent } from './admin/list/list.component';
import { ActionService } from "./admin/service/action.service";
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { RoleComponent } from './admin/role/role.component';
import { AddRolesComponent } from './admin/add-roles/add-roles.component';
import { HrComponent } from './routing/hr/hr.component';
import { ItComponent } from './routing/it/it.component';
import { SaleComponent } from './routing/sale/sale.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    RoleComponent,
    AddRolesComponent,
    HrComponent,
    ItComponent,
    SaleComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ActionService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
