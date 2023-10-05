import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://restaurant.webwide.ge/api/Categories/GetAll"
    return this.http.get(url)
  }
}
