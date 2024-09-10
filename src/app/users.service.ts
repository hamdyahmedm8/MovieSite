import { Injectable } from '@angular/core';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  newService:any=[];
  constructor() { 
    // this.newService=newUser.age;
  }
  ingredientList:User[] = [
    {name: 'hamdy', age: 25,salary:3000,gander:"male"},
    {name: 'ahmed', age: 31,salary:9000,gander:"male",phone:7775000},
    {name: 'abdallah', age: 19,salary:20000,gander:"male"},
    {name: 'hamdy', age: 25,salary:3000,gander:"male"},
    {name: 'ahmed', age: 31,salary:9000,gander:"male",phone:7775000},
    {name: 'abdallah', age: 19,salary:20000,gander:"male"},{name: 'hamdy', age: 25,salary:3000,gander:"male"},
    {name: 'ahmed', age: 31,salary:9000,gander:"male",phone:7775000},
    {name: 'abdallah', age: 19,salary:20000,gander:"male"},
  ];
}
