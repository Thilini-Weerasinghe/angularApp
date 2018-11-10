import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldComponent } from './world/world.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app/app.component';
import { GoombaComponent } from './goomba/goomba.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorldComponent, HomeComponent, AppComponent, GoombaComponent, CharacterComponent]
})
export class AngularHeroModule { }
