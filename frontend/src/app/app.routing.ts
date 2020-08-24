/**
 * The app routing file defines the routes of the application, each route contains a path and associated component.
 * The home route is secured by passing the RoutingGuard to the canActive property of the route
 */
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent} from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { AddComponent } from "./admin/add/add.component";
import { EditComponent} from "./admin/edit/edit.component";
import { ListComponent } from "./admin/list/list.component";
import { RoleComponent } from "./admin/role/role.component";
import { AddRolesComponent } from "./admin/add-roles/add-roles.component";

import { AuthGuard } from "./auth/_guards/auth.guard";
import {ItComponent} from "./routing/it/it.component";
import {SaleComponent} from "./routing/sale/sale.component";
import {HrComponent} from "./routing/hr/hr.component";
import {RoutingGuard} from "./routing/_guards/routing.guard";

const appRoutes: Routes = [
  //Auth Router
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  //Admin Router
  { path: 'Admin/add-user', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'Admin/edit-user', component: EditComponent, canActivate: [AuthGuard, RoutingGuard] },
  { path: 'Admin/roles', component: RoleComponent, canActivate: [AuthGuard, RoutingGuard] },
  { path: 'Admin/add-roles', component: AddRolesComponent, canActivate: [AuthGuard, RoutingGuard] },

  //Roles router
  { path: 'Admin', component: ListComponent, canActivate: [AuthGuard, RoutingGuard] },
  { path: 'IT', component: ItComponent, canActivate: [AuthGuard, RoutingGuard]},
  { path: 'Sale', component: SaleComponent, canActivate: [AuthGuard, RoutingGuard]},
  { path: 'HR', component: HrComponent, canActivate: [AuthGuard, RoutingGuard]},


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes)
