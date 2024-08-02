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
      { image: 'assets/images/products/80g/Produto11.jpg', name: 'Azeitonas Verdes com Caroço' },
      { image: 'assets/images/products/80g/Produto12.jpg', name: 'Azeitonas Verdes Fatiadas' },
      { image: 'assets/images/products/80g/Produto13.jpg', name: 'Azeitonas Verdes Recheadas' },
      { image: 'assets/images/products/80g/Produto14.jpg', name: 'Azeitonas Verdes sem Caroço' }
    ],
    'baldes': [
      { image: 'assets/images/products/baldes/Produto15.jpg', name: 'Azeitonas Verdes com Caroço' },
      { image: 'assets/images/products/baldes/Produto16.jpg', name: 'Azeitonas Verdes Fatiadas' },
      { image: 'assets/images/products/baldes/Produto17.jpg', name: 'Azeitonas Verdes Recheadas' },
      { image: 'assets/images/products/baldes/Produto18.jpg', name: 'Azeitonas Verdes sem Caroço' },
      { image: 'assets/images/products/baldes/Produto19.jpg', name: 'Cebolinha em Conserva' },
      { image: 'assets/images/products/baldes/Produto20.jpg', name: 'Pepino em Conserva' },
      { image: 'assets/images/products/baldes/Produto21.jpg', name: 'Picles' },
      { image: 'assets/images/products/baldes/Produto22.jpg', name: 'Champignon Inteiro' },
      { image: 'assets/images/products/baldes/Produto23.jpg', name: 'Champignon Fatiado' },
      { image: 'assets/images/products/baldes/Produto24.jpg', name: 'Cebola Pérola' },
      { image: 'assets/images/products/baldes/Produto25.jpg', name: 'Palmito' },
      { image: 'assets/images/products/baldes/Produto26.jpg', name: 'Alho' }
    ],
    'gourmet': [
      { image: 'assets/images/products/gourmet/Produto27.jpg', name: 'Azeitonas Gourmet com Caroço' },
      { image: 'assets/images/products/gourmet/Produto28.jpg', name: 'Azeitonas Gourmet sem Caroço' },
      { image: 'assets/images/products/gourmet/Produto29.jpg', name: 'Cebolinha Gourmet' },
      { image: 'assets/images/products/gourmet/Produto30.jpg', name: 'Pepino Gourmet' },
      { image: 'assets/images/products/gourmet/Produto31.jpg', name: 'Champignon Gourmet Inteiro' },
      { image: 'assets/images/products/gourmet/Produto32.jpg', name: 'Champignon Gourmet Fatiado' },
      { image: 'assets/images/products/gourmet/Produto33.jpg', name: 'Picles Gourmet' }
    ],
    'sachet': [
      { image: 'assets/images/products/sachet/Produto34.jpg', name: 'Azeitonas Verdes com Caroço' },
      { image: 'assets/images/products/sachet/Produto35.jpg', name: 'Azeitonas Verdes Fatiadas' },
      { image: 'assets/images/products/sachet/Produto36.jpg', name: 'Azeitonas Verdes Recheadas' },
      { image: 'assets/images/products/sachet/Produto37.jpg', name: 'Azeitonas Verdes sem Caroço' },
      { image: 'assets/images/products/sachet/Produto38.jpg', name: 'Cebolinha' },
      { image: 'assets/images/products/sachet/Produto39.jpg', name: 'Pepino' },
      { image: 'assets/images/products/sachet/Produto40.jpg', name: 'Picles' },
      { image: 'assets/images/products/sachet/Produto41.jpg', name: 'Champignon' }
    ],
    'vidro': [
      { image: 'assets/images/products/vidro/Produto42.jpg', name: 'Azeitonas Verdes com Caroço' },
      { image: 'assets/images/products/vidro/Produto43.jpg', name: 'Azeitonas Verdes Fatiadas' },
      { image: 'assets/images/products/vidro/Produto44.jpg', name: 'Azeitonas Verdes Recheadas' },
      { image: 'assets/images/products/vidro/Produto45.jpg', name: 'Azeitonas Verdes sem Caroço' },
      { image: 'assets/images/products/vidro/Produto46.jpg', name: 'Cebolinha' },
      { image: 'assets/images/products/vidro/Produto47.jpg', name: 'Pepino' },
      { image: 'assets/images/products/vidro/Produto48.jpg', name: 'Picles' },
      { image: 'assets/images/products/vidro/Produto49.jpg', name: 'Champignon Inteiro' },
      { image: 'assets/images/products/vidro/Produto50.jpg', name: 'Champignon Fatiado' }
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
