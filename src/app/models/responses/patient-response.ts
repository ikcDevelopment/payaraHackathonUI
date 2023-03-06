import { PatientInterface } from "../patient-interface";
import { StandardResponse } from "./standard-response";

export interface PatientResponse extends StandardResponse {
  patient: PatientInterface;
}
