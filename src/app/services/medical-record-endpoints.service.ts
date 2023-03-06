import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { MainHostService } from './main-host.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordEndpointsService {
  private resourcePath = '/medical-record';

  constructor(
    private mainHostService: MainHostService
    ) { }

  getEndPoint(route:number): Endpoint{
    const mainEndPoint = this.mainHostService.ikcRestMs + this.resourcePath;
        let endPoint: Endpoint = {endPoint:'', apiKey:'', method:''};

        switch(route) {
            case 0:  // addMedicalRecord
                endPoint.endPoint = mainEndPoint + '/patient-record';
                endPoint.apiKey = 'zykduSyPuk7effmU$bACADIt3';
                endPoint.method = 'POST';
                break;
            case 1:  // addAppointment
                endPoint.endPoint = mainEndPoint + '/appointment';
                endPoint.apiKey = '*wQ1Rp05SxB7c@sEZvOrg7QSZ';
                endPoint.method = 'POST';
                break;
            case 2:  // addLaboratoryAnalysis
                endPoint.endPoint = mainEndPoint + '/lab/{patientId}/appointment/{appointmentKey}';
                endPoint.apiKey = 'nsGp3$aMXwr1wqq1XtgvyiKHn';
                endPoint.method = 'POST';
                break;
            case 3:  // addPrescription
                endPoint.endPoint = mainEndPoint + '/prescription/{patientId}/appointment/{appointmentKey}';
                endPoint.apiKey = '2jy@69eG4jrjXrG00ub3Sixnm';
                endPoint.method = 'POST';
                break;
            case 4:  // addMedicalProcedure
                endPoint.endPoint = mainEndPoint + '/medical-procedure/{patientId}/appointment/{appointmentKey}';
                endPoint.apiKey = '0K6ffu3XbEU3l6cgNlezrr2iz';
                endPoint.method = 'POST';
                break;
            case 5:  // addHospitalization
                endPoint.endPoint = mainEndPoint + '/hospitalization/{patientId}/appointment/{appointmentKey}';
                endPoint.apiKey = '1zaESx59jwcOyu64ehbUm3L8a';
                endPoint.method = 'POST';
                break;
            case 6:  // updateMedicalRecord
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}';
                endPoint.apiKey = 'ok3zdvRjWOUnUyoG5F@ndBDlD';
                endPoint.method = 'PUT';
                break;
            case 7:  // updateHospitalization
                endPoint.endPoint = mainEndPoint + 'patient-record/{recordKey}/appointment/{appointmentKey}/hospitalization';
                endPoint.apiKey = 'fcgh7L1ghyXaYw9cDcCN$seVd';
                endPoint.method = 'PUT';
                break;
            case 8:  // updateLaboratoryAnalysis
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/lab';
                endPoint.apiKey = '3$j#qg0lfFg9bn3olwe2QJC7V';
                endPoint.method = 'PUT';
                break;
            case 9:  // updateMedicalProcedure
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/medical-procedure';
                endPoint.apiKey = 'f1wkzmuwEt2c@ky25u0n5DNc4';
                endPoint.method = 'PUT';
                break;
            case 10:  // updatePrescription
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/prescription';
                endPoint.apiKey = '2HU9cn@tnjBphk*etwSijfaMt';
                endPoint.method = 'PUT';
                break;
            case 11:  // deleteHospitalization
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/hospitalization/{hospitalizationKey}';
                endPoint.apiKey = 'srQ7jZFwEOO9TbvuPqq7SLi3h';
                endPoint.method = 'DELETE';
                break;
            case 12:  // deleteLaboratoryAnalysis
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/lab/{labKey}';
                endPoint.apiKey = 'bovO@D9m6VM204p8zWa*g#1R@';
                endPoint.method = 'DELETE';
                break;
            case 13:  // deleteMedicalProcedure
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/medical-procedure/{medicalProcedureKey}';
                endPoint.apiKey = '5g91Ds$$HbaY8kD@G4etsqt8U';
                endPoint.method = 'DELETE';
                break;
            case 14:  // deleteMedicalRecord
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/patient/{patientKey}';
                endPoint.apiKey = 'uUR60ShZ6@nBPh0vpMceiNc3C';
                endPoint.method = 'DELETE';
                break;
            case 15:  // deletePrescription
                endPoint.endPoint = mainEndPoint + '/patient-record/{recordKey}/appointment/{appointmentKey}/prescription/{prescriptionKey}';
                endPoint.apiKey = 'c4e5tZi5981ks4qmPian51L10';
                endPoint.method = 'DELETE';
                break;
            case 16:  //
                endPoint.endPoint = mainEndPoint + '';
                endPoint.apiKey = '';
                endPoint.method = 'GET';
                break;
        }

        return endPoint;
    }
}
