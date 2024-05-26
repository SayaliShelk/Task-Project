import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskSchedule } from 'src/app/Interface/task-schedule';
import { TaskSchedulerService } from 'src/app/Services/task-scheduler.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!:FormGroup
  itasks:TaskSchedule[] = []; 
  params:any = {
  id:''
  }
  index:any
  uniqval: any;

  constructor(private router:Router,private fb:FormBuilder,private service:TaskSchedulerService,private ar:ActivatedRoute) {
      this.itasks = this.service.get_local_storage('taskList');
      if(this.itasks.length == 0 || this.itasks.length == undefined){
      this.uniqval = '0'
      this.itasks=[]

      }else{
      this.itasks = this.service.get_local_storage('taskList');

      // this.uniqval = this.service.return_uniqueValue()
      }
    // if(this.uniqval == '0'){
    // this.itasks=[]
    // }else if(this.uniqval == '1'){
    //   this.itasks = this.service.get_local_storage('taskList');
    // }
   }

  ngOnInit(): void {
    this.initialize_Form()
    this.ar.queryParams.subscribe((params) => {
      this.params = params
    })

    for(let i=0;i<this.itasks.length;i++){
      if(this.itasks[i].id==this.params.id){
        this.index=i
        this.taskForm.patchValue(this.itasks[i])
      }
    }
   
  }

  initialize_Form(){
    this.taskForm = this.fb.group({
      id:['',Validators.required],
      title: ['', Validators.required],
      description: ['',Validators.required],
      date: ['',Validators.required],
    });
  }

  get f() { return this.taskForm.controls; }
 

  backbutton(){
    this.router.navigate(['TaskList'])
  }

  addtask(){
    if(this.taskForm.valid){
      if(this.params.id){
        this.itasks[this.index] = this.taskForm.value
        this.service.set_local_storage('taskList',this.itasks)
      }else{
        this.itasks.push(this.taskForm?.value)
        this.service.set_local_storage('taskList',this.itasks)
      }
      this.router.navigate(['TaskList'])
    }else{
      alert('Please fill all fields')
    }
    
  }

}
