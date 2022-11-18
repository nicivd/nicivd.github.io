import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Selection } from '../models/selection';

import { ToastService } from './toast.service';
import { DiscountService } from './discount.service';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  public selectionSubject = new BehaviorSubject<Array<Selection>>([]);
  public selectionList = Array<Selection>();

  constructor(
    private toastService: ToastService,
    private discountService: DiscountService
  ) { }

  public getSelectionObservable(): Observable<Array<Selection>> {
    return this.selectionSubject.asObservable();
  }

  public addModule(name: string, price: number, rent: string, dependency: number): Array<Selection> {
    const moduleprice = price;
    if (this.selectionList.find((selection) => selection.name == name) == undefined) {
      const selection: Selection = { name: name, price: price, rent: rent, dependency: dependency, quantity: 1, discount: 0 };
      this.selectionList.push(selection);
      this.selectionSubject.next(this.selectionList);
    } else {
      this.selectionList.forEach(module => {
        if (name == module.name) {
          if (module.rent == 'user') {
            module.quantity++;
            this.addDiscount(module.name, moduleprice);
          }
          else {
            this.showNoQuantityToast();
          }
        }
      })
    }
    return this.selectionList;

  }

  public deleteModule(name: string, price: number): Array<Selection> {
    this.selectionList.forEach(module => {
      if (name == module.name) {
        if (module.quantity == 1) {
          const index: number = this.selectionList.indexOf(module);
          this.selectionList.splice(index, 1);
        } else {
          module.quantity--;
          module.price = this.discountService.getDiscount(module.quantity, price);
          module.discount = this.discountService.getENUM(module.quantity);
        }
      }
    });
    return this.selectionList;
  }
  public deletefromSelection(name: string, price: number): Array<Selection> {
    this.selectionList.forEach(module => {
      if (name == module.name) {
        const moduleprice = price / module.quantity;
        this.deleteModule(name, moduleprice)
      }
    });
    return this.selectionList;
  }

  public showNoQuantityToast(): void {
    this.toastService.show('Achtung: pauschale Module nur einmal buchbar !', { classname: 'bg-danger text-light', delay: 6000 });
  }

  public addDiscount(name: string, originalPrice: number): void {
    this.selectionList.forEach(module => {
      if (name == module.name) {
        module.price = this.discountService.getDiscount(module.quantity, originalPrice);
        module.discount = this.discountService.getENUM(module.quantity);
      }
    })
  }
}
