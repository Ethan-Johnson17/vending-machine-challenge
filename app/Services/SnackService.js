import { ProxyState } from "../AppState.js"
import { Snacks } from "../Models/snacks.js"

let snacks = ProxyState.snacks
class SnackService {


    addMoney(money) {
        ProxyState.moneyAdded += money
    }
    makePurchase(choice) {

        ProxyState.moneyAdded -= snacks.price
    }
}

export const snackService = new SnackService