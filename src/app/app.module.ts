import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { SacComponent } from './sac/sac.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { FaleConoscoPageComponent } from './fale-conosco-page/fale-conosco-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    AboutComponent,
    SocialComponent,
    ContactComponent,
    FaleConoscoComponent,
    SacComponent,
    FooterComponent,
    CatalogPageComponent,
    HeaderImageComponent,
    FaleConoscoPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
