import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { NewsallComponent } from './newsall/newsall.component';
import { NewsService } from "./shared/news.service";

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'newsAll', component: NewsallComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    BestsellerComponent,
    NewsComponent,
    LoginComponent,
    SlideComponent,
    ProductComponent,
    ProductDetailComponent,
    StaffComponent,
    AboutComponent,
    NewsallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    Title,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
