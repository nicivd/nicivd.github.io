import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() discount: number = 0;

  constructor(public activeModal: NgbActiveModal) { }
}
