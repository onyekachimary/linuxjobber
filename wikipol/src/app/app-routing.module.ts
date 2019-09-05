import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [

	{path: 'profile',component: ProfileComponent},
	{path: 'home',component: HomeComponent},
	{ path: 'display',component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent, HomeComponent, DisplayComponent]