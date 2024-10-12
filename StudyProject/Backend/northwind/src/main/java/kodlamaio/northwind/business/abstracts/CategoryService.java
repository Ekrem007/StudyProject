package kodlamaio.northwind.business.abstracts;

import java.util.List;

import org.springframework.stereotype.Service;

import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.entities.concretes.Category;
import kodlamaio.northwind.entities.concretes.Product;

@Service
public interface CategoryService {
	
	DataResult<List<Category>> getAll();
	
	Result add(Category category);
	
	Result delete(int categoryId);
}
