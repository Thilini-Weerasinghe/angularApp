import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input() name : string;
  constructor() { }

  ngOnInit() {
  }
  jump(){
    alert("this.name + 'has jumped'")
  }
 jumpforCoins(){
    // alert("marion is jumping")
    this.coins = this.coinService.getcoins();
  }
   crushGoomba(goombaId){
    alert("marion is jumping")
    this.removeGoomba.next(goombaId);
    this.coins = 15;
  }
}
