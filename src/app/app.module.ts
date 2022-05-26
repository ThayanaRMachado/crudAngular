import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './pages/category/category-list/category-list.component';
import { CategoryFormComponent } from './pages/category/category-form/category-form.component';
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const appRouters: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'categoryList', component: CategoryListComponent },
  {path: 'categoryForm', component : CategoryFormComponent},
  {path: 'categoryForm/:id', component : CategoryFormComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
