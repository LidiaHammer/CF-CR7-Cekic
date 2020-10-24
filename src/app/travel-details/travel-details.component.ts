import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { travelOffers } from '../travelOffers';
@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  offers;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(offers) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(offers);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.offers = travelOffers[+params.get('offersId')];
  });
  }
}
