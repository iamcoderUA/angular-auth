import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    AppSharedModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {
}
