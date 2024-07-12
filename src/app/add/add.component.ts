import { Component } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // property

  contact:any={}

  constructor(private api:ApiService){}


  // function definition

  saveContact(){
    this.api.addContact(this.contact).subscribe({
      next:(res:any)=>{
        alert('new contact successfully added')
      },
      error:(err:any)=>{
        alert('cannot perform the action now')
      }
    })
  }

  cancel(){
    this.contact={}
  }
  

}
