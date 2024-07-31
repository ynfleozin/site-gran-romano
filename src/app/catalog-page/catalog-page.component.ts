import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
}

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent {
  products: { [key: string]: Product[] } = {
    '1kg': [
      { image: 'assets/images/products/1kg/Produto1.jpg', name: 'Champignon Inteiro' },
      { image: 'assets/images/products/1kg/Produto2.jpg', name: 'Champignon Fatiado' },
      { image: 'assets/images/products/1kg/Produto3.jpg', name: 'Azeitonas Verdes Fatiadas' },
      { image: 'assets/images/products/1kg/Produto4.jpg', name: 'Azeitonas Verdes com Caroço Graúdas' },
      { image: 'assets/images/products/1kg/Produto5.jpg', name: 'Azeitonas Verdes com Caroço Média' },
      { image: 'assets/images/products/1kg/Produto6.jpg', name: 'Azeitonas Verdes com Caroço Miúda' },
      { image: 'assets/images/products/1kg/Produto7.jpg', name: 'Azeitonas Verdes Recheadas' },
      { image: 'assets/images/products/1kg/Produto8.jpg', name: 'Azeitonas Verdes sem Caroço' }
    ],
    '50g': [
      { image: 'assets/images/products/50g/Produto9.jpg', name: 'Cebolinha' },
      { image: 'assets/images/products/50g/Produto10.jpg', name: 'Azeitonas Verdes com Caroço' },
    ],
    '80g': [
      { image: 'assets/images/products/80g/Produto11.jpg', name: 'Azeitonas Verdes com Caroço' }
    ]
  };

  filteredProducts: Product[] = [];
  selectedWeight: string = '1kg';

  constructor() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products[this.selectedWeight] || [];
  }

  onWeightChange(weight: string) {
    this.selectedWeight = weight;
    this.filterProducts();
  }
}
