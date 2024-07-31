import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products = [
    {
      image: 'assets/images/products/gourmet/Produto1.jpg',
      name: 'Preta com Caroço',
    },
    {
      image: 'assets/images/products/1kg/Produto2.jpg',
      name: 'Champignon Fatiado',
    },
    {
      image: 'assets/images/products/50g/Produto9.jpg',
      name: 'Cebolinha',
    },
    {
      image: 'assets/images/products/50g/Produto10.jpg',
      name: 'Azeitonas Verdes com Caroço',
    },
  ];

  constructor(private router: Router) {}

  navigateToCatalogPage() {
    this.router.navigate(['/catalog-page']);
  }
}
