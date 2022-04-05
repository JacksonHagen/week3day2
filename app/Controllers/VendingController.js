
import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";
import { saveState } from "../Utils/LocalStorage.js";

function _drawSnacks() {
    let template = ''
    ProxyState.snacks.forEach((s, i) => {
        if(i-1 % 6 === 5) {
            template += '</div>'
        }
        if(i % 6 != 0) {
            template += s.Template
        }
        else {
            template += '<div class="row my-5">'
            template += s.Template
        }
    })
    document.getElementById('vending-grid').innerHTML = template
}

function _drawTotal() {
    document.getElementById('total').innerText = ProxyState.totalSpent.toString()
}

export class VendingController{
    constructor(){
        ProxyState.on('snacks', _drawSnacks)
        ProxyState.on('snacks', saveState)
        console.log('hello from the vending controller');
        _drawSnacks()
    }
    createSnack() {
        window.event.preventDefault()
        console.log('create a snack.')
        let form = window.event.target
        let newSnack = {
            // @ts-ignore
            name: form.name.value,
            // @ts-ignore
            price: form.price.value,
            // @ts-ignore
            img: form.img.value
        }
        // @ts-ignore,
        form.reset()
        console.log('snack', newSnack);
        vendingService.createSnack(newSnack)
        
    }
    buySnack(price) {
        vendingService.buySnack(price)
        _drawTotal()
    }
    deleteItem(id){
        vendingService.deleteItem(id)
    }
}