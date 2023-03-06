import { MedicineInterface } from "./medicine-interface";

export interface PrescriptionInterface {
  prescriptionKey:string;
  patientId:string;
  doctorId:string;
  prescriptionDate:string;
  medicine:MedicineInterface;
}
