import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AllContacts:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getContactList()
  }


  // get userlist function


  getContactList(){
    this.api.getAllUSer().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.AllContacts=res
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteContact(id:any){
    this.api.deleteContacts(id).subscribe({
      next:(res:any)=>{
        this.getContactList()
        },
        error:(err:any)=>{
          console.log(err);
          
        }
    })
  }

}
