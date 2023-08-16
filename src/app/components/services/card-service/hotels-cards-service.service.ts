import { Injectable } from '@angular/core';
import { Hotel, Hotels } from 'src/app/models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsCardsServiceService {
  allHotels: Hotels = []
  AllHotelsTogether: Array<Hotel> = []
  AllHotelsTogetherAuxList: Array<Hotel> = []
  allHotelsByTheCity: Hotel[] = []
  city: string = ''
  itemsPerPage: number = 10
  listIsEmpty: boolean = false


  constructor() { }
}
