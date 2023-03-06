import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { MainHostService } from './main-host.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineEndpointsService {
  private resourcePath = '/medicines';

  constructor(private mainHostService: MainHostService) { }

  getEndPoint(route:number): Endpoint{
    const mainEndPoint = this.mainHostService.ikcRestMs + this.resourcePath;
        let endPoint: Endpoint = {endPoint:'', apiKey:'', method:''};

        switch(route) {
            case 0:  // getMedicine
                endPoint.endPoint = mainEndPoint + '/{medicineKey}';
                endPoint.apiKey = 'vnN53cpUUUQdvrp7JmBjskj0F';
                endPoint.method = 'GET';
                break;
            case 1:  // getMedicines
                endPoint.endPoint = mainEndPoint + '/all';
                endPoint.apiKey = '4Bhh4ehitS9ngqZcrFq95tq5R';
                endPoint.method = 'GET';
                break;
            case 2:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
        }

        return endPoint;
    }
}
