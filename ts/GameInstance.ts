import {GameEntity} from "~/ts/classes/abstract/GameEntity";
import {Building} from "~/ts/classes/Building";
import * as fs from "fs";
import { buildings} from "~/ts/instanciation/buildings";


export class GameInstance {
    entities = {
        buildings,
    }

    constructor(save?: string) {

    }

    public async initialization () {

    }

    // todo load save in the instance
    public loadSave() {

    }
}