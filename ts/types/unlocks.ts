import { Building } from "~/ts/classes/Building";
import { Technology } from "~/ts/classes/Technology";

export type Unlocker = Building | Technology

export interface UnlockCondition {
    unlocker: Unlocker,
    amount?: number
}