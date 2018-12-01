import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    AppSharedModule,
    RegisterRoutingModule,
  ],
})
export class RegisterModule {
}
