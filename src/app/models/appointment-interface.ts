import { HospitalizationInterface } from "./hospitalization-interface";
import { LaboratoryAnalysis } from "./laboratory-analysis";
import { MedicalProcedureInterface } from "./medical-procedure-interface";
import { PrescriptionInterface } from "./prescription-interface";

export interface AppointmentInterface {
  appointmentKey:string;
  patientId:string;
  doctorId:string;
  symptoms:string;
  appointmentDate:string;
  symptomsStartedDate:string;
  appointmentDescription:string;
  analysisDone:LaboratoryAnalysis[];
  prescriptions:PrescriptionInterface[];
  procedures:MedicalProcedureInterface[];
  hospitalizations:HospitalizationInterface[];
}
