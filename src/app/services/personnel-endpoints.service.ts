import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { MainHostService } from './main-host.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelEndpointsService {
  private resourcePath = '/personnel';

  constructor(private mainHostService: MainHostService) { }

  getEndPoint(route:number): Endpoint{
    const mainEndPoint = this.mainHostService.ikcRestMs + this.resourcePath;
        let endPoint: Endpoint = {endPoint:'', apiKey:'', method:''};

        switch(route) {
          case 0:  // deleteEmployee
          endPoint.endPoint = mainEndPoint + '/{fiscalId}/del';
          endPoint.apiKey = 's2Pm2@pXEkd4ZSAmhvYr9Im7V';
          endPoint.method = 'DELETE';
          break;
      case 1:  // getEmployee
          endPoint.endPoint = mainEndPoint + '/{fiscalId}';
          endPoint.apiKey = 'bsNH0eeTmZiy1IhuaonZKq3P#';
          endPoint.method = 'GET';
          break;
      case 2:  // getEmployees
          endPoint.endPoint = mainEndPoint + '/all';
          endPoint.apiKey = 'zbnrcvemlrYo9sp8B2j1bP9Lf';
          endPoint.method = 'GET';
          break;
      case 3:  // insertEmployee
          endPoint.endPoint = mainEndPoint + '/new';
          endPoint.apiKey = 'sDx6bxzWnanXKsT31Zsobnc8#';
          endPoint.method = 'POST';
          break;
      case 4:  // updateEmployee
          endPoint.endPoint = mainEndPoint + '/update';
          endPoint.apiKey = 'hJi1E5cc5sdndlwKKy0Y2ah3V';
          endPoint.method = 'PUT';
          break;
      case 5:  //
          endPoint.endPoint = mainEndPoint + '/all-tree-ui';
          endPoint.apiKey = 'zopipfduemlrYo9sp8B2j1bP9Lf';
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
