import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modules } from '../models/module';
import { ModalComponent } from '../shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public open(bundle: Modules, discount: number): void {
    const modal = this.modalService.open(ModalComponent);
    modal.componentInstance.name = bundle.name;
    modal.componentInstance.price = bundle.price;
    modal.componentInstance.discount = discount;
  }

}
