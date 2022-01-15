import {UnlockCondition} from "~/ts/types/unlocks";
import {GameInstance} from "~/ts/GameInstance";
import {logger} from "~/ts/utils/logger";


export interface GameEntityParameters {
    name: string,
    description: string,
    initialAmount?: number,
    unlockedBy?: UnlockCondition[]
}

export abstract class GameEntity {
    isUnlocked: boolean = true
    unlockedBy: UnlockCondition[] = []

    amount: number = 0

    name: string
    description: string

    constructor(parameters: GameEntityParameters) {
        this.name = parameters.name
        this.description = parameters.description

        if (parameters.initialAmount) {
            this.amount = parameters.initialAmount
        }
        if (parameters.unlockedBy) {
            this.isUnlocked = false
            this.unlockedBy = parameters.unlockedBy
        }
    }
}