import { Injectable } from '@angular/core';
import { Modules } from '../models/module';
import { ModalService } from './modal.service';

import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private KMUCLASSIC: Modules = {
    name: 'KMU CLASSIC',
    price: 75,
    rent: 'user',
    dependency: 0,
    category: 'Bundles',
    quantity: 0,
    bundle: ''
  };
  private SERVICEMANAGEMENT: Modules = {
    name: 'SERVICE MANAGEMENT',
    price: 53,
    rent: 'user',
    dependency: 1,
    category: 'Bundles',
    quantity: 0,
    bundle: ''
  };

  private HANDEL: Modules = {
    name: 'HANDEL',
    price: 57,
    rent: 'user',
    dependency: 1,
    category: 'Bundles',
    quantity: 0,
    bundle: ''
  };

  constructor(
    private selectionService: SelectionService,
    private modalService: ModalService
  ) { }

  public checkBundle(): void {
    if (this.selectionService.selectionList.find(module => module.name == 'Adressverwaltung')) {
      if (this.selectionService.selectionList.find(module => module.name == 'Artikel- und Lagerverwaltung')) {
        if (this.selectionService.selectionList.find(module => module.name == 'Auftragsbearbeitung')) {
          if (this.selectionService.selectionList.find(module => module.name == 'Debitorenbuchhaltung')) {
            if (this.selectionService.selectionList.find(module => module.name == 'Kreditorenbuchhaltung')) {
              if (this.selectionService.selectionList.find(module => module.name == 'Finanzbuchhaltung')) {
                this.modalService.openBundleModal(this.KMUCLASSIC, 27);
                this.addKMUCLASSIC();
              }
            }
          }
        }
      }
    }
    if (this.selectionService.selectionList.find(module => module.name == 'Leistungsverwaltung')) {
      if (this.selectionService.selectionList.find(module => module.name == 'Kundeninstallationsverwaltung')) {
        if (this.selectionService.selectionList.find(module => module.name == 'Serviceauftragsverwatlung')) {
          this.modalService.openBundleModal(this.SERVICEMANAGEMENT, 17);
          this.addSERVICEMANAGEMENT();
        }
      }
    }
    if (this.selectionService.selectionList.find(module => module.name == 'Einkaufsverwaltung')) {
      if (this.selectionService.selectionList.find(module => module.name == 'Preisverwaltung')) {
        if (this.selectionService.selectionList.find(module => module.name == 'Provisionsverwaltung')) {
          if (this.selectionService.selectionList.find(module => module.name == 'Rückstände/ Reservationen/ Teilrechnungen')) {
            this.modalService.openBundleModal(this.HANDEL, 19);
            this.addHANDEL();
          }
        }
      }
    }
  }

  public addKMUCLASSIC(): void {
    this.selectionService.deleteModule('Adressverwaltung', 9);
    this.selectionService.deleteModule('Artikel- und Lagerverwaltung', 17);
    this.selectionService.deleteModule('Auftragsbearbeitung', 25);
    this.selectionService.deleteModule('Debitorenbuchhaltung', 13);
    this.selectionService.deleteModule('Kreditorenbuchhaltung', 13);
    this.selectionService.deleteModule('Finanzbuchhaltung', 25);
    this.selectionService.addModule('KMU CLASSIC', 75, 'user', 0);
  }

  public addSERVICEMANAGEMENT(): void {
    this.selectionService.deleteModule('Leistungsverwaltung', 28);
    this.selectionService.deleteModule('Kundeninstallationsverwaltung', 17);
    this.selectionService.deleteModule('Serviceauftragsverwatlung', 25);
    this.selectionService.addModule('SERVICE MANAGEMENT', 53, 'user', 1);
  }

  public addHANDEL(): void {
    this.selectionService.deleteModule('Einkaufsverwaltung', 25);
    this.selectionService.deleteModule('Preisverwaltung', 17);
    this.selectionService.deleteModule('Provisionsverwaltung', 17);
    this.selectionService.deleteModule('Rückstände/ Reservationen/ Teilrechnungen', 17);
    this.selectionService.addModule('HANDEL', 57, 'user', 1);
  }

}
