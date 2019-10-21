import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items;
	
   constructor(
	private itemService: ItemService
  ) { }
  
  ngOnInit() {
	  this.itemService.getItemsList().subscribe(i => this.items = i);
  }
  
}
