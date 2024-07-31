import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent {
  products = [
    // Lista completa de produtos
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
    // Adicione todos os produtos necessários aqui
  ];
}
