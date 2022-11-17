import { Injectable } from '@angular/core';
import { ObservableService } from './observable.service';
import { ToastService } from './toast.service';
import { Selection } from '../models/selection';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  public selectionList = new Array<Selection>();

  constructor(
    private observableService: ObservableService,
    private toastService: ToastService
  ) {
    this.observableService.getSelectionObservable().subscribe(
      selection => {
        this.selectionList = selection;
      });

  }

  public getDependency(dependency: number): void {
    if (dependency == 1) {
      if (this.selectionList.find((selection) => selection.name == 'Adressverwaltung' || selection.name == 'KMU CLASSIC') == undefined) {
        this.observableService.addModule('Adressverwaltung', 9, 'user', 0);
        this.getfirstDependencyToast();
      }
    }
    if (dependency == 2) {
      if (this.selectionList.find((selection) => selection.name == 'Kundeninstallationsverwaltung' || selection.name == 'SERVICE MANAGEMENT') == undefined) {
        if (this.selectionList.find((selection) => selection.name == 'Adressverwaltung' || selection.name == 'KMU CLASSIC') == undefined) {
          this.observableService.addModule('Adressverwaltung', 9, 'user', 0);
        }
        this.observableService.addModule('Kundeninstallationsverwaltung', 17, 'user', 1);
        this.getsecondDependencyToast();
      }
    }
    if (dependency == 3) {
      this.getthirdDependencyToast();
    }
  }

  public getfirstDependencyToast(): void {
    this.toastService.show('Achtung: Dieses Modul benötigt Adressverwaltung !', { classname: 'bg-danger text-light', delay: 6000 });
  }

  public getsecondDependencyToast(): void {
    this.toastService.show('Achtung: Dieses Modul benötigt Adressverwaltung und Kundeninstallationsverwaltung !', { classname: 'bg-danger text-light', delay: 6000 });
  }

  public getthirdDependencyToast(): void {
    this.toastService.show('Achtung: Apps benötigen SQL Server !', { classname: 'bg-danger text-light', delay: 6000 });
  }
}
