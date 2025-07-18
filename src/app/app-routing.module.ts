import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'chat', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
  { path: 'inventory', loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'notifications', loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'product' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
