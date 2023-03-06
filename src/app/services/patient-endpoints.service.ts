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
            case 0:  // deletePatient
                endPoint.endPoint = mainEndPoint + '/{fiscalId}/del';
                endPoint.apiKey = '9keh6ywp9ulfptfw4mJhr4*Ga';
                endPoint.method = 'DELETE';
                break;
            case 1:  // getPatient
                endPoint.endPoint = mainEndPoint + '/{fiscalId}';
                endPoint.apiKey = '36Re8Ncim*OAKuSxoIj67eVK5';
                endPoint.method = 'GET';
                break;
            case 2:  // getPatients
                endPoint.endPoint = mainEndPoint + '/all';
                endPoint.apiKey = '0xqZOhzGE1wdl5#t8rMW1E0gM';
                endPoint.method = 'GET';
                break;
            case 3:  // insertPatient
                endPoint.endPoint = mainEndPoint + '/new';
                endPoint.apiKey = 'g7r4qz07Pdb7EsO0j4wb848Di';
                endPoint.method = 'POST';
                break;
            case 4:  // updatePatient
                endPoint.endPoint = mainEndPoint + '/update';
                endPoint.apiKey = 'jn00GAZxhfYV9$U019LIUqH@b';
                endPoint.method = 'PUT';
                break;
            case 5:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
            case 6:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
            case 7:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
            case 8:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
        }

        return endPoint;
    }
}
