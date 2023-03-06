import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../models/endpoint';
import { PatientInterface } from '../models/patient-interface';
import { PatientListResponse } from '../models/responses/patient-list-response';
import { PatientResponse } from '../models/responses/patient-response';
import { StandardResponse } from '../models/responses/standard-response';
import { PatientEndpointsService } from './patient-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

    constructor(
        private http: HttpClient,
        private endPoints: PatientEndpointsService
    ) { }

    insertPatient(body: PatientInterface):Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(3);
        const directEndPoint = endPoint.endPoint;

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updatePatient(body: PatientInterface):Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(4);
        const directEndPoint = endPoint.endPoint;

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    deletePatient(fiscalId: string):Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(0);
        const directEndPoint = endPoint.endPoint
            .replace('{fiscalId}',fiscalId);

        return this.http.delete<StandardResponse>(
            directEndPoint
        );
    }

    getPatient(fiscalId: string):Observable<PatientResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(1);
        const directEndPoint = endPoint.endPoint
            .replace('{fiscalId}',fiscalId);

        return this.http.get<PatientResponse>(
            directEndPoint
        );
    }

    getPatients(): Observable<PatientListResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(2);
        const directEndPoint = endPoint.endPoint;

        return this.http.get<PatientListResponse>(
            directEndPoint
        );
    }
}
