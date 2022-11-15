import { Component, OnInit } from '@angular/core';

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
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-rent-license',
  templateUrl: './rent-license.component.html',
  styleUrls: ['./rent-license.component.scss']
})
export class RentLicenseComponent {

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

  constructor(
    private modalService: ModalService
  ) { }

  public openModal(content: any): void {
    this.modalService.open(content);
  }

}
