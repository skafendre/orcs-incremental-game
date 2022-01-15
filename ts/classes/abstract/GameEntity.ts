import { UnlockCondition} from "~/ts/types/unlocks";

export interface GameEntityParameters {
    initialAmount?: number,
    name: string,
    description: string,
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