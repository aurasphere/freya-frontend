import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	username;
	password;
	showErrorMessage = false;
	loginForm;
	
	constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
	this.loginForm = this.formBuilder.group({
      username: '',
	  password: ''
    });
	}
	
	doLogin(form) {
		this.auth.doLogin(form.username, form.password)
		  .subscribe(response => {
			if (response.status === 401) {
				this.showErrorMessage = true;
			} else {
				this.router.navigate(['']);
			}	
		  });
	}
 
}
