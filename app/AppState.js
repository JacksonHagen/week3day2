import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/LocalStorage.js"

class AppState extends EventEmitter {

  totalSpent = 0

  snacks = [
    new Snack({name: 'Doritos', price: 1, img: 'https://m.media-amazon.com/images/I/81S5rKXF10L._SY879_.jpg'}),
    new Snack({name: 'Pop Corners', price: 1.5, img: 'https://target.scene7.com/is/image/Target/GUEST_051f3b07-523f-4c35-87b2-bccfad211152?wid=488&hei=488&fmt=pjpeg'}),
    new Snack({name: 'Sour Patch Kids', price: 3, img: 'https://m.media-amazon.com/images/I/81SFEy-bzlL._SL1500_.jpg'}),
    new Snack({name: 'Pocky', price: 2, img: 'https://target.scene7.com/is/image/Target/GUEST_d0eb439c-3f20-4eb7-be83-471c10b67778'}),
    new Snack({name: 'Takis', price: 2.5, img: 'https://m.media-amazon.com/images/I/81JuyKBhbHS._SL1500_.jpg'}),
    new Snack({name: 'Sexy Chips', price: 4, img: 'https://yourinnervoicereviews.files.wordpress.com/2015/11/sweetpotato-1.png'})
  ]

  values = []
}


// NOTE This is a proxy object - observer pattern

export const ProxyState = new Proxy(new AppState  (), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
