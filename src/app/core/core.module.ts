import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Error } from 'tslint/lib/error';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  imports: [
    HttpClientModule,
    LoaderModule,
  ],
  exports: [
    LoaderModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
