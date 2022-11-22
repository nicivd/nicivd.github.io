import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modules } from '../models/module';
import { ModalComponent } from '../shared/modal/modal.component';
import { TotalService } from './total.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: NgbModal,
    private totalService: TotalService
  ) { }

  public openBundleModal(bundle: Modules, discount: number): void {
    const modal = this.modalService.open(ModalComponent);
    modal.componentInstance.title = 'Hinweis Proffix Paket';
    modal.componentInstance.headerText = 'Die ausgewählten Module sind in einem Paket erhältlich:';
    modal.componentInstance.name = bundle.name;
    modal.componentInstance.price = bundle.price;
    modal.componentInstance.discount = discount;
  }

  public openBundleInfoModal(modules: Array<Modules>, name: string): void {
    const modal = this.modalService.open(ModalComponent);
    modal.componentInstance.title = 'Proffix Paket ' + name;
    modal.componentInstance.headerText = 'Folgende Module sind im Paket enthalten:';
    modal.componentInstance.bundleModulesInfo = true;
    modal.componentInstance.modulesList = modules;
    modal.componentInstance.totalBundleSingle = this.totalService.getTotalBundleSingle(modules);
  }

}
