import { BloodType } from "src/app/enums/blood-type";
import { RhFactor } from "src/app/enums/rh-factor";

export interface RegisterModel {
    fullName: string;
    securityNumber: string;
    country: string;
    city: string;
    gender: string;
    birthDay: string;
    bloodType: BloodType;
    rhFactor: RhFactor;
    phoneNumber: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
}