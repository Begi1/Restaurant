import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://restaurant.webwide.ge/api/Products/GetAll"
    return this.http.get(url)
  }

  getFilteredData(Veg: any, Nuts: any, spiciness: any, categoryId: any) {
    let url: any
    if(categoryId == undefined && spiciness == "Not Chosen"){
      url = `https://restaurant.webwide.ge/api/Products/GetFiltered?vegeterian=${Veg}&nuts=${Nuts}`
      
    }else if(spiciness == "Not Chosen"){
      url = `https://restaurant.webwide.ge/api/Products/GetFiltered?vegeterian=${Veg}&nuts=${Nuts}&categoryId=${categoryId}`
    }else if(categoryId == undefined){
      url = `https://restaurant.webwide.ge/api/Products/GetFiltered?vegeterian=${Veg}&nuts=${Nuts}&spiciness=${spiciness}`
    }
    return this.http.get(url)
  }
}
