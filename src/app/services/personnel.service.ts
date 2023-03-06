import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../models/endpoint';
import { PersonnelInterface } from '../models/personnel-interface';
import { EmployeeListResponse } from '../models/responses/employee-list-response';
import { EmployeeResponse } from '../models/responses/employee-response';
import { StandardResponse } from '../models/responses/standard-response';
import { PersonnelEndpointsService } from './personnel-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

    constructor(
        private http: HttpClient,
        private endPoints: PersonnelEndpointsService
    ) { }

    insertEmployee(body: PersonnelInterface):Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(3);
        const directEndPoint = endPoint.endPoint;

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updateEmployee(body: PersonnelInterface):Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(4);
        const directEndPoint = endPoint.endPoint;

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    deleteEmployee(fiscalId:string){
        const endPoint: Endpoint = this.endPoints.getEndPoint(0);
        const directEndPoint = endPoint.endPoint
            .replace('{fiscalId}',fiscalId);

        return this.http.delete<StandardResponse>(
            directEndPoint
        );
    }

    getEmployee(fiscalId:string):Observable<EmployeeResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(1);
        const directEndPoint = endPoint.endPoint
            .replace('{fiscalId}',fiscalId);

        return this.http.get<EmployeeResponse>(
            directEndPoint
        );
    }

    getEmployees():Observable<EmployeeListResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(2);
        const directEndPoint = endPoint.endPoint;

        return this.http.get<EmployeeListResponse>(
            directEndPoint
        );
    }



}
