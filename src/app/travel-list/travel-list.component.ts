import { Component, OnInit } from '@angular/core';
import { travelOffers } from '../travelOffers';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  travelOffers=travelOffers;

  constructor() { }

  ngOnInit(): void {
  }

}
