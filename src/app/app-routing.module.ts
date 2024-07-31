import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { SacComponent } from './sac/sac.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
  { path: 'sac', component: SacComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
