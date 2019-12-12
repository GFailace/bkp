import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RisksComponent } from './risks/risks.component';
import { RiskDetailsComponent } from './risks/risk-details/risk-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: RisksComponent },
  { path: 'risk-details/:id', component: RiskDetailsComponent },
  { path: 'auth', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
