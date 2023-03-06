import { AppointmentInterface } from "./appointment-interface";

export interface MedicalRecordInterface {
  recordKey:string;
  patientId:string;
  doctorId:string;
  additionalComments:string
  appointments:AppointmentInterface[];
}
