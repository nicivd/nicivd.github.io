import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Selection } from '../models/selection';

import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  public selectionSubject = new BehaviorSubject<Array<Selection>>([]);

  public selectionList = Array<Selection>();

  constructor(
    private toastService: ToastService
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
            module.price = module.price + moduleprice;
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
          module.price = module.price - price;
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
}
