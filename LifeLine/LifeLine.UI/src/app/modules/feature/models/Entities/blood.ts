import { BloodType } from "../../../../shared/Enums/blood-type";
import { RhFactor } from "../../../../shared/Enums/rh-factor";

export interface Blood {
    bloodType: BloodType;
    rhFactor: RhFactor;
    quantity: number;
}
