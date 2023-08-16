import { HotelsCardsServiceService } from './../services/card-service/hotels-cards-service.service';
import { Component, OnInit } from '@angular/core';
import * as hotelOptionsData from '../../data/hotel.json'
import { Hotel, Hotels } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotelcards.component.html',
  styleUrls: ['./hotelcards.component.css']
})
export class HotelCardsComponent implements OnInit {

  noFilteredHotelOptions: Hotels = (hotelOptionsData as any).default;

  constructor(public hotelsCardsServiceService: HotelsCardsServiceService) { }

  ngOnInit(): void {
    this.hotelsCardsServiceService.allHotels = this.noFilteredHotelOptions;
    this.putAllHotelInOneEstructure();

  }

  putAllHotelInOneEstructure(): any {
    const fillPlacesInOneEstructre: Array<Hotel> = []
    this.hotelsCardsServiceService.allHotels.forEach((hotel) => {
      let hotels: Hotel[] = hotel.hotels.map((e) => e);
      hotels.forEach((e) => {
        fillPlacesInOneEstructre.push(e);
      })
    })
    this.hotelsCardsServiceService.AllHotelsTogetherAuxList = fillPlacesInOneEstructre;
    this.hotelsCardsServiceService.AllHotelsTogether = fillPlacesInOneEstructre;
  }


}
