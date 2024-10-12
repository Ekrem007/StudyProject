package kodlamaio.northwind.core.dataAccess;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.northwind.core.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {
	
	User findByEmail(String email);
	


}
