import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskSchedulerService {
uniqueval:any
  constructor() { }

  get_uniqueValue(newvalue:any){
    this.uniqueval = newvalue
  }

  return_uniqueValue(){
    return this.uniqueval
  }

  get_local_storage(key:any){
    let data = localStorage.getItem(key)
    return JSON.parse(data || '{}')
  }

  set_local_storage(key:any,array:any){
    localStorage.setItem(key,JSON.stringify(array))
  }

}
