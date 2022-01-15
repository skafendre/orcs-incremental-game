import {Amount} from "~/ts/types/amount";
import {Produce} from "~/ts/types/produce";
import {GameEntity, GameEntityParameters} from "~/ts/classes/abstract/GameEntity";


export interface BuildingParameters {
    cost: Amount[]
    produce: Produce[]
    costIncrement: number
}

/**
 * Buildings produces resources and can be bought repeatedly
 */
export class Building extends GameEntity {
    cost: Amount[]
    produce: Produce[]
    costIncrement: number

    constructor(gameEntity: GameEntityParameters, building: BuildingParameters) {
        super(gameEntity)

        this.cost = building.cost
        this.produce = building.produce
        this.costIncrement = building.costIncrement
    }

    public increaseAmount() {
        this.amount++
    }
}