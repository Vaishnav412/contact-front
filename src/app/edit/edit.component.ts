import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contact:any={}


  constructor(private route:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
         this.existingContact(this.contact.id)
  }

  // existing contact function define

  existingContact(id:any){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const{id}=res
      console.log(id);

      this.api.existingcontact(id).subscribe({
        next:(res:any)=>{
          console.log(res);
           this.contact=res
           },
           error:(err:any)=>{
            console.log(err);
            alert('cannot perform action now')
            
           }
      })
    })
  }

  updateContact(){
    this.api.updateContact(  this.contact.id,this.contact).subscribe({
      next:(res:any)=>{
      
        
        alert('updated successfully')
      },
      error:(err:any)=>{
        alert('cannot perform the action now')
      }
    })
  }

  cancelUpdate(userId:any){
    this.existingContact(userId)
  }


}
