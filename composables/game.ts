export const useCounter = () => useState<number>('counter', () => 0)

import { GameInstance} from "~/ts/classes/GameInstance";

export const useGame = () => useState<GameInstance>('game', () => new GameInstance(0))