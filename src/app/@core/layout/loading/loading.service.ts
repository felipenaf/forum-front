import { Injectable } from '@angular/core';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

    loadingSubject = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}
