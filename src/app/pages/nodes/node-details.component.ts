import { Component, OnInit } from '@angular/core';
import { NodesService } from '../../services/nodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {
  item = {};

  constructor(
    private route: ActivatedRoute,
	private itemService: NodesService
  ) { }
  
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    //this.itemService.getItemById(params.get('itemId')).subscribe(i => this.item = i);
  });
}

}
