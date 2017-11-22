import { Component, OnInit } from '@angular/core';
import { fail } from 'assert';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// varibales
name:string;
age:number;
address:Address;
hobbies:string[];
quote:any;

  constructor() {

    console.log("Constructor.....");
   }

  ngOnInit() {
    console.log("Runing..... ngOnInit...");
     this.name = "";
     this.age = 0;
     this.address = {
          city:"",
          state:"",
          pin:20100
}

this.hobbies = [];
this.quote = "";



  }
  
  onclick() {
    console.log("heee");
    this.name = "John Doe";
    this.age = 32;
    this.hobbies.push("Cool");
    }


    addForm(hobby){

      console.log(hobby);
      this.hobbies.unshift(hobby);
     
      return false;
    }

  removeBtn(hobby){
   console.log(hobby);
   for(let i =0 ; i<this.hobbies.length ;i++ ){
     if(this.hobbies[i] == hobby){
       this.hobbies.splice(i ,1);

     }


   }

  }

}

interface Address {

  city:string,
  state:string,
  pin:number

}