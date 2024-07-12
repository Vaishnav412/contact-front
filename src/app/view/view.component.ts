import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

   view:any={}

  constructor(private activated:ActivatedRoute  ,private api: ApiService) { }


  ngOnInit(): void {
    
this.viewContact(this.view.id)
    

  }

  viewContact(id:any) {
    this.activated.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      console.log(id);
      this.api.viewContact(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.view=res
        },
        error:(err:any)=>{
          console.log('Error fetching contact',err);
          alert('cannot perform action now')
        }
      })
      
    })
  }





}
