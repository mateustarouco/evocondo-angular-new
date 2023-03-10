import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/auth/auth.guard";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo:'login',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
