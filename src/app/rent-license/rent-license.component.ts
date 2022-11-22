import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Modules } from '../models/module';
import { Selection } from '../models/selection';

import { ModalService } from '../service/modal.service';
import { SelectionService } from '../service/selection.service';
import { TotalService } from '../service/total.service';
import { DependencyService } from '../service/dependency.service';
import { BundleService } from '../service/bundle.service';

import mainModulesdata from '../data/mainmodule.json';
import bundlesData from '../data/bundle.json';
import payrollData from '../data/payroll.json';
import additionModulesData from '../data/additional-module.json';
import optionsData from '../data/option.json';
import toolsData from '../data/tool.json';
import regData from '../data/registration-programm.json';
import appData from '../data/app.json';
import webserviceData from '../data/webservice.json';
import interfaceData from '../data/interface.json';

@Component({
  selector: 'app-rent-license',
  templateUrl: './rent-license.component.html',
  styleUrls: ['./rent-license.component.scss']
})
export class RentLicenseComponent implements OnInit, OnDestroy {

  public bundles: Modules[] = bundlesData;
  public mainmodules: Modules[] = mainModulesdata;
  public payroll: Modules[] = payrollData;
  public additionModules: Modules[] = additionModulesData;
  public options: Modules[] = optionsData;
  public tools: Modules[] = toolsData;
  public registrations: Modules[] = regData;
  public apps: Modules[] = appData;
  public webservices: Modules[] = webserviceData;
  public interfaces: Modules[] = interfaceData;

  public selectionList = new Array<Selection>();

  private unsubscribe = new Subject<void>();

  constructor(
    public modalService: ModalService,
    private selectionService: SelectionService,
    public additionService: TotalService,
    private dependencyService: DependencyService,
    private bundleService: BundleService
  ) { }

  ngOnInit(): void {
    this.selectionService.getSelectionObservable().pipe(takeUntil(this.unsubscribe)).subscribe(
      (selection: Selection[]) => {
        this.selectionList = selection;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  public addModule(modulename: string, price: number, rent: string, dependency: number): void {
    this.dependencyService.addDependency(dependency);
    this.selectionService.addModule(modulename, price, rent, dependency);
    this.bundleService.checkBundle();
    this.getTotalPrice();
  }

  public deleteModule(name: string, price: number): void {
    this.selectionService.deleteModule(name, price);
    this.dependencyService.getDependency();
    this.getTotalPrice();
  }
  public deletefromSelection(name: string, price: number): void {
    this.selectionService.deletefromSelection(name, price);
    this.dependencyService.getDependency();
    this.getTotalPrice();
  }
  public getTotalPrice(): void {
    this.additionService.getTotalPrice();
  }

  public getBundleInfo(name: string): void {
    let bundleModules: Modules[] = [];
    if (name == 'KMU CLASSIC') {
      this.mainmodules.forEach(module => {
        if (module.bundle == 'KMU CLASSIC') {
          bundleModules.push(module);
        }
      })
      this.modalService.openBundleInfoModal(bundleModules, name);
    }
    if (name == 'SERVICE MANAGEMENT') {
      this.additionModules.forEach(module => {
        if (module.bundle == 'SERVICE MANAGEMENT') {
          bundleModules.push(module);
        }
      })
      this.modalService.openBundleInfoModal(bundleModules, name);
    }
    if (name == 'HANDEL') {
      this.additionModules.forEach(module => {
        if (module.bundle == 'HANDEL') {
          bundleModules.push(module);
        }
      })
      this.modalService.openBundleInfoModal(bundleModules, name);
    }

  }

}
