import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldComponent } from './world/world.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorldComponent, HomeComponent]
})
export class AngularHeroModule { }
