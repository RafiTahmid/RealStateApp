
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';



@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Iproperty[] = [];
  SellRent = 1
  // private apiUrl = 'src/data/properties.json';
  constructor(private housingService: HousingService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
debugger
    this.housingService.getAllProperties(this.SellRent).subscribe(
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
