
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';



@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  // private apiUrl = 'src/data/properties.json';
  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data)
      },
      error => {
        console.error('httperror');
        console.log(error)
      }
    )
  }

}
