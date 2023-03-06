import { PersonnelInterface } from "./personnel-interface";

export interface DoctorInvolvedInterface {
  doctorInvolvedKey:string;
  doctor:PersonnelInterface;
  medicalFee:number;
}
