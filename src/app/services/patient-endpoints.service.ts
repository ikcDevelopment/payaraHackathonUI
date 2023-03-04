import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { MainHostService } from './main-host.service';

@Injectable({
  providedIn: 'root'
})
export class PatientEndpointsService {
  private resourcePath = '/';

  constructor(private mainHostService: MainHostService) { }

  getAccountingGlobalEndPoint(route:number): Endpoint{
    const mainEndPoint = this.mainHostService.ikcRestMs + this.resourcePath;
        let endPoint: Endpoint = {endPoint:'', apiKey:'', method:''};

        switch(route) {
            case 0:  // getAccountingTransactionsDocumentsType
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
            case 1:  // getAccountCodesUsedByFiscalIdentificationNumber
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
            case 2:  // getFiscalIdentificationNumbersInAccounting
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
        }

        return endPoint;
    }
}
