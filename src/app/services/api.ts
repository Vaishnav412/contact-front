import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url="http://localhost:3000"

  constructor(private http:HttpClient) { }


  getAllUSer(){
   return this.http.get(`${this.base_url}/contacts`)
  }

  addContact(contact:any){
   return this.http.post(`${this.base_url}/contacts`,contact)
  }

  existingcontact(id:any){
  return  this.http.get(`${this.base_url}/contacts/${id}`)
  }

  updateContact(id:any,data:any){

   return this.http.put(`${this.base_url}/contacts/${id}`,data)
  }

  viewContact(id:any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  deleteContacts(id:any){
    return   this.http.delete(`${this.base_url}/contacts/${id}`)
  }


}
