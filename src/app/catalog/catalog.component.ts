import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products = [
    {
      image: 'assets/images/Produto1.jpg',
      name: 'Azeitonas Verdes C/ Caroço',
      description: 'Azeitonas Verdes em conserva com Caroço.'
    },
    {
      image: 'assets/images/Produto2.jpg',
      name: 'Azeitonas Verdes S/ Caroço',
      description: 'Azeitonas Verdes em conserva sem Caroço.'
    }
  ];

  onLearnMore(product: any) {
    console.log('Saiba Mais sobre', product);
  }
}
