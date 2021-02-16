import { ProxyState } from "../AppState.js";
import Buy from "../Models/Buy.js";


class GameService {
    constructor() {
        console.log("Hi there from the game service File!");
    }
 
    buyKitKat(){
        if(ProxyState.yourMoney <= 0){
            console.log("No More Money Left")
        }else{
        ProxyState.yourMoney-= 1
        ProxyState.moneySpent++
        ProxyState.kitkatQuantity+= 1 
        }
    }
    buySnickers(){
        if(ProxyState.yourMoney <= 1){
            console.log("No More Money Left")
        }else{
        ProxyState.yourMoney-= 2
        ProxyState.moneySpent+= 2
        ProxyState.snickersQuantity+= 1 
        }
    }
    buyCliffBar(){
        if(ProxyState.yourMoney <= 2){
            console.log("No More Money Left")
        }else{
        ProxyState.yourMoney-= 3
        ProxyState.moneySpent+= 3
        ProxyState.cliffBarQuantity+= 1 
        }
    }
    buySprite(){
        if(ProxyState.yourMoney <= 3){
            console.log("No More Money Left")
        }else{
        ProxyState.yourMoney-= 4
        ProxyState.moneySpent+= 4
        ProxyState.spriteQuantity+= 1 
        }
    }

    eatItems(){
        ProxyState.kitkatQuantity = 0 
        ProxyState.snickersQuantity = 0
        ProxyState.cliffBarQuantity = 0
        ProxyState.spriteQuantity = 0
    }

    addMoney(){
        ProxyState.yourMoney += 50
    }


}

export const gameService = new GameService();