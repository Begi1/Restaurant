import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  
  getData(){
    let url = "https://restaurant.webwide.ge/api/Baskets/GetAll"
    return this.http.get(url)
  }

  deleteProduct(id: any) {
    let url = `https://restaurant.webwide.ge/api/Baskets/DeleteProduct/${id}`
    return this.http.delete(url)
  }

  addProduct(product: any) {
    let url = "https://restaurant.webwide.ge/api/Baskets/AddToBasket"
    return this.http.post(url, product)
  }

  increaseQty(product: any, id: any) {
    let url = `/api/Baskets/UpdateBasket/${id}`
    console.log(product)
    return this.http.put(url, product)
  }
}
