import { Status } from "../../../../shared/Enums/status";
import { Blood } from "./blood";

export interface DonateBlood {
    fullName: string;
    blood: Blood;
    phoneNumber: string;
    email: string;
    location: string;
    dateTime: Date;
    status: Status;
}
