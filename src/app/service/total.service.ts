import { Injectable } from '@angular/core';
import { Modules } from '../models/module';

import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  public total: number = 0;

  constructor(
    private selectionService: SelectionService
  ) { }

  public getTotalPrice(): number {
    let totalprice: number = 0;
    this.selectionService.selectionList.forEach(module => {
      totalprice += module.price;
    });
    this.total = totalprice;
    return totalprice;
  }

  public getTotalBundleSingle(moduleList: Array<Modules>): number {
    let totalBundleSingle: number = 0;
    moduleList.forEach(module => {
      totalBundleSingle += module.price;
    })
    return totalBundleSingle;
  }
}
