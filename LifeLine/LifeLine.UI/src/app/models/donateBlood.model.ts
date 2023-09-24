import { Status } from "../enums/status";
import { BloodModel } from "./blood.model";

export interface DonateBloodModel {
    fullName: string;
    securityNumber: string;
    blood: BloodModel;
    phoneNumber: string;
    email: string;
    location: string;
    dateTime: Date;
    status: Status;
}