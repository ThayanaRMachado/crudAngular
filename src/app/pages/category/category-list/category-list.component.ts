import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/model/Category";
import { CategoryService } from "src/app/service/category.service";

@Component({
  selector: "app-root",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  name: String;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategoryList()
      .subscribe(data => {
        console.log(data);
        this.categories = data;
      })

  }

  cetegoryDelete(id: Number) {
    this.categoryService.cetegoryDelete(id).subscribe(data => {
      console.log("Deletado com sucesso");
      this.categoryService.getCategoryList().subscribe(data => {
        this.categories = data;
        console.log("Lista carregada com sucesso após deletar categoria");
      });
    });
  }
  
  findCategoryByName() {
    this.categoryService.findCategoryByName(this.name).subscribe(data => {
      this.categories = data;
    });
  }
}
