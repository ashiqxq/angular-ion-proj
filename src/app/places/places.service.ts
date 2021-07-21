import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of the Big Apple',
    'https://static2.mansionglobal.com/production/media/article-images/2f6a5dc3d80ef19f3bc23ddc1e911adf/large_Screen-Shot-2017-12-07-at-12.11.10-PM.png',
    149.99),
    new Place('p2', 'L\' Amour Toujour', 'A romantic getaway',
    'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.cottagesgardens.com/content/uploads/2019/12/Look-Inside-54-4M-Paris-Mansion-Heart-of-the-City-gates.jpg', 121.99),
    new Place('p3', 'Ranch', 'The cowboy world',
    'https://robbreport.com/wp-content/uploads/2020/02/wolf-1.jpg', 1300),
  ];

  get places(){
    return [...this._places];
  }
  constructor() { }
  getPlace(id: string){
    return {...this._places.find(p=>p.id===id)};
  }
}
