import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item = {};

  constructor(
    private route: ActivatedRoute,
	private itemService: ItemService
  ) { }
  
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.itemService.getItemById(params.get('itemId')).subscribe(i => this.item = i);
  });
}

}
