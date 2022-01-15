import { Amount } from "~/ts/types/amount";

export enum ProduceType {
    oneTime,
    trigger,
    regular
}

export interface Produce {
    amount: Amount
    type: ProduceType,
    trigger?
    every?: number // every seconds?
}