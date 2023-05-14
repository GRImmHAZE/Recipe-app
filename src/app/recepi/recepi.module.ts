import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepiPageRoutingModule } from './recepi-routing.module';

import { RecepiPage } from './recepi.page';
import { RecepiDetailComponent } from './recepi-detail/recepi-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RecepiPageRoutingModule
  ],
  declarations: [RecepiPage,RecepiDetailComponent,ShoppingListComponent]
})
export class RecepiPageModule {}
