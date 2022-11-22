import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modules } from 'src/app/models/module';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() headerText: string = '';

  @Input() name: string = '';
  @Input() price: number = 0;

  @Input() discount: number = 0;
  @Input() modulesList: Array<Modules> = [];

  @Input() bundleModulesInfo: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }
}
