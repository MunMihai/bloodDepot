import { Status } from "../enums/status";
import { BloodModel } from "./blood.model";

export interface RequestBloodModel{
    name: string;
    blood: BloodModel[];
    phoneNumber: string;
    email: string;
    status: Status;
}