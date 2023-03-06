import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../models/endpoint';
import { MedicineListResponse } from '../models/responses/medicine-list-response';
import { MedicineResponse } from '../models/responses/medicine-response';
import { MedicineEndpointsService } from './medicine-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

    constructor(
    private http: HttpClient,
    private endPoints: MedicineEndpointsService
    ) { }

    getMedicine(medicineKey:string): Observable<MedicineResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(0);
        const directEndPoint = endPoint.endPoint
            .replace('{medicineKey}',medicineKey);

        return this.http.get<MedicineResponse>(
            directEndPoint
        );
    }

    getMedicines(): Observable<MedicineListResponse> {
        const endPoint: Endpoint = this.endPoints.getEndPoint(1);
        const directEndPoint = endPoint.endPoint;

        return this.http.get<MedicineListResponse>(
            directEndPoint
        );
    }


}
