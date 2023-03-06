import { PatientInterface } from "../patient-interface";
import { StandardResponse } from "./standard-response";

export interface PatientListResponse extends StandardResponse{
  patients: PatientInterface[];
}
