import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'auth', component: AuthComponent},
  //{path: 'page-not-found', component: PageNotFoundComponent},
  //{path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
