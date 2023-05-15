import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  }, 
  {
    path: 'signin',
    component: LoginComponent,
  }, {
    path: '',
    component: SignupComponent,
  } , {
    path : 'home',
    component: HomeComponent, 
  } , {
    path: 'child',
    component: ChildComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
