import { PersonnelInterface } from "../personnel-interface";
import { StandardResponse } from "./standard-response";

export interface EmployeeListResponse extends StandardResponse{
  employees:PersonnelInterface[];
}
