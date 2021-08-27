import { Component, OnInit } from '@angular/core';
import {products} from 'src/data/products';
import { product } from 'src/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title:string = "Rahul Shetty Academy"

  products:product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
