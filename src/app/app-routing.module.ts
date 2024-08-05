import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { SacComponent } from './sac/sac.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { HomeComponent } from './home/home.component';
import { FaleConoscoPageComponent } from './fale-conosco-page/fale-conosco-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog-page', component: CatalogPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: 'sac', component: SacComponent },
  { path: 'fale-conosco-page', component: FaleConoscoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
