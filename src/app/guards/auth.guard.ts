import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../actions/user.actions';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {

  private user: User;
  private sub: Subscription;

  constructor(store: Store<State>, private router: Router) {
    this.sub = store.pipe(select(state => state.login.user))
                    .subscribe(user => this.user = user);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = (this.user && this.user.token);

    const isLoggedIn = !!token;

    if (state.url === '/login') {
        if (isLoggedIn) {
            this.router.navigate(['/widgets']);
            return false;
        }
        return true;
     }

    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}