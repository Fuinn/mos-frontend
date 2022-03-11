import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { State } from '../root-store/root-store.state';
import { selectToken } from '../root-store/root-store.selectors';
import { first, flatMap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private store$: Store<State>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store$.select(selectToken).pipe(
            first(),
            flatMap(token => {
                const authReq = !!token ? req.clone({
                    setHeaders: { Authorization: `Token ${token.key}` },
                }) : req;
                return next.handle(authReq);
            }),
        );
    }
}