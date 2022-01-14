export class GameInstance {
    counter: number

    constructor(initialCounter: number) {
        this.counter = 45
    }

    public incCounter() {
        console.log('Incremented counter!')
        this.counter++
    }
}