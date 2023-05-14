import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiPage } from './recepi.page';
import { RecepiDetailComponent } from './recepi-detail/recepi-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecepiPage
  },
  {
    path: 'detail',
    component: RecepiDetailComponent,
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiPageRoutingModule {}
