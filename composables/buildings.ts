import { gameInstance } from "~/ts";
import {Building} from "~/ts/classes/Building";

export const useBuildings = () => useState<string>('buildings', () => gameInstance.entities.buildings[0].name)