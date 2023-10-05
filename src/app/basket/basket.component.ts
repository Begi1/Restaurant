import { Component } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})


export class BasketComponent {

  cartArray: any
  total: number = 0

  constructor(private basket: BasketService) {
    this.basket.getData().subscribe((data: any) => {
      this.cartArray = data
      this.totalPrice()
    })
    
  } 

  totalPrice() {
    for(let i = 0; i < this.cartArray.length; i++){
      this.total += this.cartArray[i].price * this.cartArray[i].quantity
    }
    return this.total
  }
  
  deleteProductFromBasket(id: any) {
    this.basket.deleteProduct(id.toString()).subscribe((result: any) => console.log(result))
  }

  increaseQty(product: any){
    product.quantity += 1
    // console.log(product)
    this.basket.increaseQty(product,product.product.id).subscribe((res) => console.log(res))
    
  }

}
