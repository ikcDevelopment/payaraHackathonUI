import { MedicineInterface } from "../medicine-interface";
import { StandardResponse } from "./standard-response";

export interface MedicineListResponse extends StandardResponse{
  medicines: MedicineInterface[];
}
