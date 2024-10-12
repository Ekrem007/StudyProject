package kodlamaio.northwind.core.dataAccess;

import jakarta.persistence.Table;
import kodlamaio.northwind.core.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {
	   	private String email;
	    private String password;

}
