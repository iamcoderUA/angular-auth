import { NgModule } from '@angular/core';

import { AppSharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    AppSharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {
}
