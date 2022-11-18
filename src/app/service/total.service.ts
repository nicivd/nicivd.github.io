import { Injectable } from '@angular/core';

import { ObservableService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  public total: number = 0;

  constructor(
    private observableService: ObservableService
  ) { }

  public getTotalPrice(): number {
    let totalprice: number = 0;
    this.observableService.selectionList.forEach((element) => {
      totalprice += element.price;
    });
    this.total = totalprice;
    return totalprice;
  }
}
