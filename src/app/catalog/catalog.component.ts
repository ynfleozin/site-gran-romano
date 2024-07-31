import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products = [
    // Apenas três produtos para exibir na tela inicial
    {
      image: 'assets/products/1kg/Produto1.jpg',
      name: 'Azeitonas Verdes C/ Caroço',
      description: 'Azeitonas Verdes em conserva com Caroço.'
    },
    {
      image: 'assets/products/80g/Produto2.jpg',
      name: 'Azeitonas Verdes S/ Caroço',
      description: 'Azeitonas Verdes em conserva sem Caroço.'
    },
    {
      image: 'assets/products/50g/Produto3.jpg',
      name: 'Azeitonas Pretas',
      description: 'Azeitonas Pretas em conserva.'
    }
  ];

  constructor(private router: Router) {}

  navigateToCatalogPage() {
    this.router.navigate(['/catalog-page']);
  }
}
