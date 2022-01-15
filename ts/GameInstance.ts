import { buildings} from "~/ts/instanciation/buildings";

export class GameInstance {
    entities = {
        buildings,
        building2: buildings
    }

    constructor(save?: string) {

    }

    public async initialization () {

    }

    // todo load save in the instance
    public loadSave() {

    }
}