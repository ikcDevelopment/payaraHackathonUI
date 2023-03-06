import { DoctorInvolvedInterface } from "./doctor-involved-interface";

export interface MedicalProcedureInterface {
  procedureKey:string;
  patientId:string;
  primaryDoctorId:string;
  additionalComments:string;
  doctors: DoctorInvolvedInterface[];
}
