import { Injectable } from '@angular/core';
import { ObservableService } from './observable.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  private foundAdressModule: boolean = false;
  private foundCostumerModule: boolean = false;

  constructor(
    private observableService: ObservableService,
    private toastService: ToastService
  ) { }

  public getDependency(dependency: number): void {
    this.getAdressModule();
    if (dependency == 1) {
      if (!this.foundAdressModule) {
        this.observableService.addModule('Adressverwaltung', 9, 'user', 0);
        this.getfirstDependencyToast();
      }
    }
    if (dependency == 2) {
      if (!this.foundAdressModule && !this.foundCostumerModule) {
        this.observableService.addModule('Adressverwaltung', 9, 'user', 0);
        this.observableService.addModule('Kundeninstallationsverwaltung', 17, 'user', 1);
        this.getsecondDependencyToast();
      }
    }
    if (dependency == 3) {
      this.getthirdDependencyToast();
    }
  }

  public getAdressModule(): void {
    this.observableService.selectionList.forEach(module => {
      if (module.name == 'Adressverwaltung' || module.name == 'KMU CLASSIC') {
        this.foundAdressModule = true;
      }
    });
  }

  public getCostumerModule(): void {
    this.observableService.selectionList.forEach(module => {
      if (module.name == 'Kundeninstallationsverwaltung' || module.name == 'SERVICE MANAGEMENT') {
        this.foundCostumerModule = true;
      }
    });
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
