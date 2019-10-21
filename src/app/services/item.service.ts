import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}
  
  getItemsList() {
	  return this.http.get('http://ec2-34-255-121-22.eu-west-1.compute.amazonaws.com:8080/article/all');
  }
  
  getItemById(id) {
	return this.http.get('http://ec2-34-255-121-22.eu-west-1.compute.amazonaws.com:8080/article/' + id);
  }

}