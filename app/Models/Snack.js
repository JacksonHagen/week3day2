import {generateId} from "../Utils/generateId.js"

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price || 1
        this.img = data.img || 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=750&format=jpeg&auto=webp'
        this.id = generateId()
    }

    get Template() {
        return /*html*/`
        <div class="col-md-2 vh-15 d-flex justify-content-center text-center flex-column" id='${this.id}'>
            <img src="${this.img}" onclick="app.vendingController.buySnack(${this.price})" class="selectable" alt="you're trash, kid. get good.">
            <h6 class="mb-0">${this.name}: $${this.price}</h6>
            <i class="mdi mdi-trash-can-outline selectable" onclick="app.vendingController.deleteItem('${this.id}')"></i>
        </div>
        `
    }
}