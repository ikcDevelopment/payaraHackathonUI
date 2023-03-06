import { PersonnelInterface } from "../personnel-interface";
import { StandardResponse } from "./standard-response";

export interface EmployeeResponse extends StandardResponse {
  employee: PersonnelInterface;
}
