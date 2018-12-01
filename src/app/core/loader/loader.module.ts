import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../shared/shared.module';

import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    AppSharedModule,
  ],
  exports: [
    LoaderComponent,
  ],
})
export class LoaderModule {
}
