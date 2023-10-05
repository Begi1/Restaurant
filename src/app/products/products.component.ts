import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ProductsService } from '../products.service'
import { BasketService } from '../basket.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {

  categoriesArray:any;
  productsArray:any;
  filteredCategory:any;
  product: any = {
    quantity: 1,
    price: 0,
    productId: 0,
    product: {}
  }
  Nuts: boolean = false
  Veg: boolean = false
  Spiciness: any = "Not Chosen";
  filteredCategoryBackup: any
  categoryId: any

  constructor(private categories: CategoriesService, private products: ProductsService, private basket: BasketService) {
    this.categories.getData().subscribe((data) => {
      this.categoriesArray = data
    })

    this.products.getData().subscribe((data) => {
      this.productsArray = data
      this.filteredCategory = data
    })
  }

  selectCategory(id: any): void {
    this.categoryId = id
    if(id == 0){
      this.filteredCategory = this.productsArray
    }else{
      this.filteredCategory = this.productsArray.filter((product: any) => product.categoryId == id)
    }
  }

  reset() {
    this.filteredCategory = this.productsArray
  }

  spiciness(event: any) {
    if(event.target.value == 0){
      this.Spiciness = "Not Chosen"
    }else if(event.target.value == 1){
      this.Spiciness = "0"
    }else if(event.target.value == 2){
      this.Spiciness = "1"
    }else if(event.target.value == 3){
      this.Spiciness = "2"
    }else if(event.target.value == 4){
      this.Spiciness = "3"
    }else if(event.target.value == 5){
      this.Spiciness = "4"
    }
  }

  nuts() {
    this.Nuts = !this.Nuts
  }

  veg() {
    this.Veg = !this.Veg
  }

  filter() {
    // if(this.Nuts == true){
    //   this.filteredCategory = this.filteredCategory.filter((product: any) => product.nuts == this.Nuts)
    // }

    // if(this.Veg == true){
    //   this.filteredCategory = this.filteredCategory.filter((product: any) => product.vegeterian == this.Veg)
    // }
    // if(this.filteredCategoryBackup == undefined) {
    //   this.filteredCategoryBackup = this.filteredCategory
    //   this.filteredCategory = this.filteredCategory.filter((product: any) => product.spiciness == this.Spiciness)
    // }else {
    //   this.filteredCategory = this.filteredCategoryBackup
    //   this.filteredCategory = this.filteredCategory.filter((product: any) => product.spiciness == this.Spiciness)
    // }
    this.products.getFilteredData(this.Veg,this.Nuts,this.Spiciness,this.categoryId).subscribe((res) => this.filteredCategory = res)
    console.log("isii")
    console.log(this.Spiciness)
  }

  addProduct(item: any){
    this.product.product = item
    this.product.price = item.price
    this.product.productId = item.id
    this.basket.addProduct(this.product).subscribe()
  }
  
}
