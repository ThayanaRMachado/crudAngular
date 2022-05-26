import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Category } from "src/app/model/Category";
import { CategoryService } from "src/app/service/category.service";

@Component({
  selector: "app-root",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.css"],
})
export class CategoryFormComponent implements OnInit {
  category = new Category();

  constructor(private routeActive: ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id !=null){
      this.categoryService.findCategoryById(id).subscribe(data => {
        this.category = data;
        console.log(this.category);
      })
    }
  }

  categorySave() {
    this.categoryService.categorySave(this.category).subscribe((data) => {
      /*Salvando uma nova categoria */
      this.novo();
      console.info("Gravou User: " + data);
    });
  }

  categoryUpdate() {
    this.categoryService.categoryUpdate(this.category).subscribe(data => {
      this.novo();
      console.info("User Atualizado: " + data);
    });
}

  novo() {
    this.category = new Category();
  }
}
