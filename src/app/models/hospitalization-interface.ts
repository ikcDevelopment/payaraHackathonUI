import { HospitalRoomInterface } from "./hospital-room-interface";

export interface HospitalizationInterface {
  hospitalizationKey:string;
  patientId:string;
  primaryDoctorId:string;
  description:string;
  hospitalizationDate:string;
  hospitalizationEnds:string;
  additionalComments:string;
  room:HospitalRoomInterface;
}
