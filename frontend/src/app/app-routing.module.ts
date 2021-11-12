import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudyComponent } from './components/study/study.component';
import { Ch1Component } from './components/ch1/ch1.component';

const routes: Routes = [  
  {path: "home", component: HomeComponent},
{path: "study", component: StudyComponent},
{path: "ch1", component: Ch1Component}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
