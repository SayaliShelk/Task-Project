import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'TaskList',
    pathMatch:'full'
  },{
    path:'TaskList',
    component:TaskListComponent
  },
  {
    path:'AddList',
    component:AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
