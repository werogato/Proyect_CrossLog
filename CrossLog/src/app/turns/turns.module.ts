import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnsPageRoutingModule } from './turns-routing.module';

import { TurnsPage } from './turns.page';
import { ComponentsModule } from '../components/components.module';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnsPageRoutingModule,
    ComponentsModule,
    RouterLink
  ],
  declarations: [TurnsPage]
})
export class TurnsPageModule { }
