import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'tasks', component: TasksComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
