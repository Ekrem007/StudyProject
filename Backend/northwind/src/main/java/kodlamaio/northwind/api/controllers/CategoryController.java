package kodlamaio.northwind.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.northwind.business.abstracts.CategoryService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.entities.concretes.Category;

@RequestMapping("/api/categories")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	
	private CategoryService categoryService;
	@Autowired
	public CategoryController(CategoryService categoryService) {
		super();
		this.categoryService = categoryService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Category>> getAll(){
		
		return this.categoryService.getAll();
		
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Category category) {
		return this.categoryService.add(category);
		
	}
	
	@DeleteMapping("/delete")
	public Result delete(@RequestParam int categoryId) {
		return this.categoryService.delete(categoryId);
		
	}
	

}
