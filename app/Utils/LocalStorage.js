import { ProxyState } from "../AppState.js"

export function saveState() {
    window.localStorage.setItem('snacks', JSON.stringify(ProxyState.snacks))
}

export function loadState() {
    return JSON.parse(window.localStorage.getItem('snacks'))
}