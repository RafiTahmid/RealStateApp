import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iproperty } from '../property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }
  getAllProperties(SellRent:number): Observable<Iproperty[]> {
    return this.http.get<any[]>('assets/data/properties.json').pipe(
      map(data=> {
        const propertiesArray: Array<Iproperty> = [];

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray
      })
    )
  }

}
