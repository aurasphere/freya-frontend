import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Node } from '../model/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private http: HttpClient) { }

  getNodesList(): Observable<Node[]> {
    // return this.http.get('http://ec2-34-255-121-22.eu-west-1.compute.amazonaws.com:8080/article/all');
    const datacenter = {id : "1", name: "my-datacenter-1", location: "Europe"} 
    return of([{
      id: "1", name: "node-1", host: "aws-blabla", connection : null, datacenter: datacenter
    },
    {
      id: "2", name: "node-2", host: "aws-blabla-2", connection : null, datacenter: datacenter
    },
    {
      id: "3", name: "node-3", host: "aws-blabla-3", connection : null, datacenter: datacenter
    }
  ]);
  }

  getNodeById(id) {
    // return this.http.get('http://ec2-34-255-121-22.eu-west-1.compute.amazonaws.com:8080/article/' + id);
  }

}