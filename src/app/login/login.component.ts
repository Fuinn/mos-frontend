import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { State } from '../root-store/root-store.state';
import { selectToken } from '../root-store/root-store.selectors';
import { TokenGetRequestAction } from '../root-store/root-store.actions';
import { Token } from '../data-models/token';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login', 
  templateUrl: './${environment.login_page}',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token$: Observable<Token>;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store$: Store<State>,
    private router: Router) { }

  ngOnInit() {
    this.token$ = this.store$.select(selectToken);
    this.token$.subscribe( 
      (token: Token) => {
        if (token) {
          this.router.navigate(['/models']);
        }
      }
    );
  }

  submit() {
    this.store$.dispatch(new TokenGetRequestAction({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }));
  }
}
