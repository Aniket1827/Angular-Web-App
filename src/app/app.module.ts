import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';
import { OfferComponent } from './content/offer/offer.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './content/product/product-card/product-card.component';
import { ProdinfoComponent } from './content/product/prodinfo/prodinfo.component';
import { LoginComponent } from './content/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    AboutComponent,
    OfferComponent,
    FooterComponent,
    ProductCardComponent,
    ProdinfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
