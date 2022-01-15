import { GameInstance} from "~/ts/GameInstance";

const gameInstance = new GameInstance()
await gameInstance.initialization()

export const useGame = () => useState<GameInstance>('game', () => gameInstance)