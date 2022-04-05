import { ProxyState } from "../AppState.js"
import { Snack } from "../Models/Snack.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

class VendingService {
    deleteItem(idNum) {
        ProxyState.snacks = ProxyState.snacks.filter(s => s.id != idNum)
    }
    createSnack(newSnack){
        ProxyState.snacks.push(new Snack(newSnack))
        ProxyState.snacks = ProxyState.snacks //NOTE this breaks the reference to memory and resets the array in the ProxyState, thereby triggering the listener
        console.log(ProxyState.snacks);
        saveState()
    }
    buySnack(price) {
        ProxyState.totalSpent += price
    }
}

export const vendingService = new VendingService()