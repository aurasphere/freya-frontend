import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
   
  doLogin(username, password){
	  return this.http.post('http://ec2-34-255-121-22.eu-west-1.compute.amazonaws.com:8080/vault/login', {username : username, password: password}, {observe: 'response'});
  }
  
}