import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NodesService } from '../../services/nodes.service';
import { Node } from '../../model/node.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './nodes-list.component.html',
  styleUrls: ['./nodes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NodesListComponent implements OnInit {
  nodes : Node[] = [];
  columnsToDisplay = ["id", "name", "host", "location", "dataCenter"];

  constructor(
    private route: ActivatedRoute,
	private nodesService: NodesService
  ) { }
  
  ngOnInit() {
    this.nodesService.getNodesList().subscribe(nodes => this.nodes = nodes);
  }

}
