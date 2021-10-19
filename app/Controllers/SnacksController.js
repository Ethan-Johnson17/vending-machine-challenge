import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function draw() {
    let currentmoney = ProxyState.moneyAdded
    let cm2 = currentmoney.toFixed(2)
    document.getElementById('moneyadded').innerText = (`${cm2}`)
}
let moneyAdded = 0
export class SnacksController {
    addMoney(money) {
        snackService.addMoney(money)
        console.log(money, ProxyState.moneyAdded)
    }

    constructor() {
        ProxyState.on('moneyAdded', draw)
    }

    makePurchase(choice) {
        moneyAdded -=
    }
}

draw()

