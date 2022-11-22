import { Injectable } from '@angular/core';
import { Discount } from '../models/discount';



@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  public getDiscount(quantity: number, originalPrice: number): number {
    let enumDiscount = this.getENUM(quantity);
    let totalPrice = originalPrice * quantity;
    let discount = totalPrice / 100 * enumDiscount;
    let discountPrice = totalPrice - discount;
    let roundedStringPrice = (Math.round(discountPrice * 20) / 20).toFixed(2);
    let roundedDiscountPrice = + roundedStringPrice;
    return roundedDiscountPrice;
  }

  public getENUM(quantity: number): number {
    switch (quantity) {
      case 1: {
        return Discount.Benutzer1;
      }
      case 2: {
        return Discount.Benutzer2;
      }
      case 3: {
        return Discount.Benutzer3;
      }
      case 4: {
        return Discount.Benutzer4;
      }
      case 5: {
        return Discount.Benutzer5;
      }
      case 6: {
        return Discount.Benutzer6;
      }
      case 7: {
        return Discount.Benutzer7;
      }
      case 8: {
        return Discount.Benutzer8;
      }
      case 9: {
        return Discount.Benutzer9;
      }
      case 10: {
        return Discount.Benutzer10;
      }
      case 11: {
        return Discount.Benutzer11;
      }
      case 12: {
        return Discount.Benutzer12;
      }
      case 13: {
        return Discount.Benutzer13;
      }
      case 14: {
        return Discount.Benutzer14;
      }
      case 15: {
        return Discount.Benutzer15;
      }
      case 16: {
        return Discount.Benutzer16;
      }
      case 17: {
        return Discount.Benutzer17;
      }
      case 18: {
        return Discount.Benutzer18;
      }
      case 19: {
        return Discount.Benutzer19;
      }
      case 20: {
        return Discount.Benutzer20;
      }
      case 21: {
        return Discount.Benutzer21;
      }
      case 22: {
        return Discount.Benutzer22;
      }
      case 23: {
        return Discount.Benutzer23;
      }
      case 24: {
        return Discount.Benutzer24;
      }
      case 25: {
        return Discount.Benutzer25;
      }
      default: {
        return Discount.Benutzer25;
      }
    }
  }


}
