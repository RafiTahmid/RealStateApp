import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array <any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Birla House-2",
      "Type": "House",
      "Price": 120002
    },
    {
      "Id": 3,
      "Name": "Birla House-3",
      "Type": "House",
      "Price": 120003
    },
    {
      "Id": 4,
      "Name": "Birla House-4",
      "Type": "House",
      "Price": 120004
    }
]

  constructor() { }

  ngOnInit() {
  }

}
