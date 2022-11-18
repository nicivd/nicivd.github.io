import { Injectable } from '@angular/core';

import { SelectionService } from './selection.service';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  constructor(
    private selectionService: SelectionService
  ) { }

  public checkBundle(): void {
    if (this.selectionService.selectionList.filter(module => module.name == 'Adressverwaltung')) {
      if (this.selectionService.selectionList.find(module => module.name == 'Artikel- und Lagerverwaltung')) {
        if (this.selectionService.selectionList.find(module => module.name == 'Auftragsbearbeitung')) {
          if (this.selectionService.selectionList.find(module => module.name == 'Debitorenbuchhaltung')) {
            if (this.selectionService.selectionList.find(module => module.name == 'Kreditorenbuchhaltung')) {
              if (this.selectionService.selectionList.find(module => module.name == 'Finanzbuchhaltung')) {
                console.log('Worked');
              }
            }
          }
        }
      }
    }



  }

  public addBundle(): void {

  }

}
