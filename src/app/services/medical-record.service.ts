import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalRecordEndpointsService } from './medical-record-endpoints.service';
import { MedicalRecordInterface } from '../models/medical-record-interface';
import { Endpoint } from '../models/endpoint';
import { StandardResponse } from '../models/responses/standard-response';
import { AppointmentInterface } from '../models/appointment-interface';
import { HospitalizationInterface } from '../models/hospitalization-interface';
import { LaboratoryAnalysis } from '../models/laboratory-analysis';
import { MedicalProcedureInterface } from '../models/medical-procedure-interface';
import { PrescriptionInterface } from '../models/prescription-interface';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(
    private http: HttpClient,
    private endPoints: MedicalRecordEndpointsService
  ) { }

    addMedicalRecord(body:MedicalRecordInterface): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(0);
        const directEndPoint = endPoint.endPoint;

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    addAppointment(body:AppointmentInterface): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(1);
        const directEndPoint = endPoint.endPoint;

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    addLaboratoryAnalysis(body:LaboratoryAnalysis, appointmentKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(2);
        const directEndPoint = endPoint.endPoint
            .replace('{patientId}', body.patientId)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    addPrescription(body:PrescriptionInterface, appointmentKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(3);
        const directEndPoint = endPoint.endPoint
            .replace('{patientId}', body.patientId)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    addMedicalProcedure(body:MedicalProcedureInterface, appointmentKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(4);
        const directEndPoint = endPoint.endPoint
            .replace('{patientId}', body.patientId)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    addHospitalization(body: HospitalizationInterface, appointmentKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(5);
        const directEndPoint = endPoint.endPoint
            .replace('{patientId}', body.patientId)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.post<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updateMedicalRecord(body: MedicalRecordInterface, recordKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(6);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey);

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updateHospitalization(body: HospitalizationInterface, appointmentKey:string, recordKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(7);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updateLaboratoryAnalysis(body: LaboratoryAnalysis, appointmentKey:string, recordKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(8);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updateMedicalProcedure(body: MedicalProcedureInterface, appointmentKey:string, recordKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(9);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    updatePrescription(body: PrescriptionInterface, recordKey:string, appointmentKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(10);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey);

        return this.http.put<StandardResponse>(
            directEndPoint,
            body
        );
    }

    deleteHospitalization(patientKey:string, recordKey:string, appointmentKey:string, hospitalizationKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(11);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey)
            .replace('{hospitalizationKey}', hospitalizationKey);

        return this.http.delete<StandardResponse>(
            directEndPoint,
            {
                params:{
                    patientKey: patientKey
                }
            }
        );
    }

    deleteLaboratoryAnalysis(patientKey:string, recordKey:string, appointmentKey:string, labKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(12);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey)
            .replace('{labKey}', labKey);

        return this.http.delete<StandardResponse>(
            directEndPoint,
            {
                params:{
                    patientKey: patientKey
                }
            }
        );
    }

    deleteMedicalProcedure(patientKey:string, recordKey:string, appointmentKey:string, medicalProcedureKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(13);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey)
            .replace('{medicalProcedureKey}', medicalProcedureKey);

        return this.http.delete<StandardResponse>(
            directEndPoint,
            {
                params:{
                    patientKey: patientKey
                }
            }
        );
    }

    deleteMedicalRecord(patientKey:string, recordKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(14);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{patientKey}', patientKey);

        return this.http.delete<StandardResponse>(
            directEndPoint
        );
    }

    deletePrescription(patientKey:string, recordKey:string, appointmentKey:string, prescriptionKey:string): Observable<StandardResponse>{
        const endPoint: Endpoint = this.endPoints.getEndPoint(15);
        const directEndPoint = endPoint.endPoint
            .replace('{recordKey}',recordKey)
            .replace('{appointmentKey}', appointmentKey)
            .replace('{prescriptionKey}', prescriptionKey);

        return this.http.delete<StandardResponse>(
            directEndPoint,
            {
                params:{
                    patientKey: patientKey
                }
            }
        );
    }

}
