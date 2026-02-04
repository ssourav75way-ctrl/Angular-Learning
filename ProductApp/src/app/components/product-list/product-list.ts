import { Component } from '@angular/core';
import { Product } from '../../models/ProductModel';
import { PRODUCTS } from '../../data/StaticProductData';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = PRODUCTS;
}
