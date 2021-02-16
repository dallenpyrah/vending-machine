import { gameService } from "../Services/GameService.js";
import { ProxyState } from '../AppState.js';


function _draw(){
    let moneySpent = document.getElementById('money-spent')
    moneySpent.innerText = ProxyState.moneySpent.toString()
    let yourMoney = document.getElementById('your-money')
    yourMoney.innerText = ProxyState.yourMoney.toString()
    let kitkatElem = document.getElementById('kitkat-quantity')
    kitkatElem.innerText = ProxyState.kitkatQuantity.toString()
    let kitKatTemplate = document.getElementById('kitkat-template')
    kitKatTemplate.innerHTML +=  `<div class="col-md-3 mt-5">
    <div class="card text-white bg-primary">
      <img class="card-img-top" src="kitkat.jpg" height="150px" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Kit Kat <span id="kitkat-quantity"></span></h4>
      </div>
    </div>
</div>` 
}
function _drawSnickers(){
    let snickersElem = document.getElementById('snickers-quantity')
    snickersElem.innerText = ProxyState.snickersQuantity.toString()
    let yourMoney = document.getElementById('your-money')
    yourMoney.innerText = ProxyState.yourMoney.toString()
    let moneySpent = document.getElementById('money-spent')
    moneySpent.innerText = ProxyState.moneySpent.toString()
    let snickersTemplate = document.getElementById('kitkat-template')
    snickersTemplate.innerHTML +=  `<div class="col-md-3 mt-5">
    <div class="card text-white bg-primary">
      <img class="card-img-top" src="snickers.jpg" height="150px" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Snickers <span id="kitkat-quantity"></span></h4>
      </div>
    </div>
</div>` 
}
function _drawCliffBar(){
    let cliffBarElem = document.getElementById('cliffBar-quantity')
    cliffBarElem.innerText = ProxyState.cliffBarQuantity.toString()
    let yourMoney = document.getElementById('your-money')
    yourMoney.innerText = ProxyState.yourMoney.toString()
    let moneySpent = document.getElementById('money-spent')
    moneySpent.innerText = ProxyState.moneySpent.toString()
    let cliffbarTemplate = document.getElementById('kitkat-template')
    cliffbarTemplate.innerHTML +=  `<div class="col-md-3 mt-5">
    <div class="card text-white bg-primary">
      <img class="card-img-top" src="cliffbar.jpg" height="150px" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Cliff Bar <span id="kitkat-quantity"></span></h4>
      </div>
    </div>
</div>` 
}
function _drawSprite(){
    let spriteElem = document.getElementById('sprite-quantity')
    spriteElem.innerText = ProxyState.spriteQuantity.toString()
    let yourMoney = document.getElementById('your-money')
    yourMoney.innerText = ProxyState.yourMoney.toString()
    let moneySpent = document.getElementById('money-spent')
    moneySpent.innerText = ProxyState.moneySpent.toString()
    let spriteTemplate = document.getElementById('kitkat-template')
    spriteTemplate.innerHTML +=  `<div class="col-md-3 mt-5">
    <div class="card text-white bg-primary">
      <img class="card-img-top" src="sprite.jpg" height="150px" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Sprite <span id="kitkat-quantity"></span></h4>
      </div>
    </div>
</div>` 
}
export default class GameController{
    constructor() {
        ProxyState.on("kitkatQuantity",_draw)
        ProxyState.on("snickersQuantity",_drawSnickers)
        ProxyState.on("cliffBarQuantity",_drawCliffBar)
        ProxyState.on("spriteQuantity",_drawSprite)
        console.log("Hi there from the game controller")
    }

    buyKitKat(){
        console.log("Bought Item")
        gameService.buyKitKat();
    }

    buySnickers(){
        console.log("Bought Item")
        gameService.buySnickers();
    }

    buyCliffBar(){
        console.log("Bought Item")
        gameService.buyCliffBar();
    }

    buySprite(){
        console.log("Bought Item")
        gameService.buySprite();
    }

    eatItems(){
        gameService.eatItems();
        document.getElementById('kitkat-template').innerHTML = ''
    }

    addMoney(){
        gameService.addMoney();
    }


    
}