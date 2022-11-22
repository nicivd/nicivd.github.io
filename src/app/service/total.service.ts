import { Injectable } from '@angular/core';

import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  public total: number = 0;

  constructor(
    private selectionService: SelectionService
  ) { }

  public getTotalPrice(): number {
    let totalprice: number = 0;
    this.selectionService.selectionList.forEach((element) => {
      totalprice += element.price;
    });
    // let roundedPrice = (Math.round(totalprice * 20) / 20).toFixed(2);
    this.total = totalprice;
    return totalprice;
  }
}
