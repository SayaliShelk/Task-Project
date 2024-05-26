import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskSchedule } from 'src/app/Interface/task-schedule';
import { TaskSchedulerService } from 'src/app/Services/task-scheduler.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasklist:TaskSchedule[]=[]

  constructor(private route:Router,private service:TaskSchedulerService) { }

  ngOnInit(): void {
    this.tasklist = this.service.get_local_storage('taskList')
    this.service.set_local_storage('taskList',this.tasklist)
  }

  addproduct(){
    this.route.navigate(['AddList'])
  }

  delete(index:any){
    this.tasklist.splice(index,1);
    this.service.set_local_storage('taskList',this.tasklist)
  }

  update(_id:any){
    this.service.get_uniqueValue('1')
    this.route.navigate(['AddList'],{queryParams:{id:_id}})
  }

}
