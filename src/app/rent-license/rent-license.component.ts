import { Component, OnDestroy, OnInit } from '@angular/core';

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

import { Modules } from '../models/module';
import { Bundels } from '../models/bundels';
import { Selection } from '../models/selection';

import { ModalService } from '../service/modal.service';
import { ObservableService } from '../service/observable.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rent-license',
  templateUrl: './rent-license.component.html',
  styleUrls: ['./rent-license.component.scss']
})
export class RentLicenseComponent implements OnInit, OnDestroy {

  public bundles: Bundels[] = bundlesData;
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
    private modalService: ModalService,
    private observableService: ObservableService
  ) { }

  ngOnInit(): void {
    this.observableService.getSelectionObservable().pipe(takeUntil(this.unsubscribe)).subscribe(
      selection => {
        this.selectionList = selection;
        console.log(this.selectionList);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }


  public openModal(content: any): void {
    this.modalService.open(content);
  }

  public addModule(modulename: string, price: number, rent: string, dependency: number): void {
    this.observableService.addModule(modulename, price, rent, dependency);
  }

  public deleteModule(name: string) {
    this.observableService.deleteModule(name);
  }

}
