import { Status } from "src/app/shared/Enums/status";

export interface Donation {
    id: number;
    fullName: string;
    bloodType: string;
    rhFactor: string;
    phoneNumber: string;
    email: string;
    location: string;
    dateTime: Date;
    status: number;
}
