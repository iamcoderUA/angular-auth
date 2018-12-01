import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoaderShown$: BehaviorSubject<boolean> = new BehaviorSubject(false);

}
