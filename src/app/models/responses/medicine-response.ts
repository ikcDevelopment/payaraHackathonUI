import { MedicineInterface } from "../medicine-interface";
import { StandardResponse } from "./standard-response";

export interface MedicineResponse extends StandardResponse {
  medicine: MedicineInterface;
}
