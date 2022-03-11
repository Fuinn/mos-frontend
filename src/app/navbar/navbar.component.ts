import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { State } from '../root-store/root-store.state';
import { selectToken } from '../root-store/root-store.selectors';
import { TokenClearAction } from '../root-store/root-store.actions';
import { UserInfoComponent } from '../user-info/user-info.component';
import { Token } from '../data-models/token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token$: Observable<Token>;

  constructor(
    private store$: Store<State>,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() { 

    this.token$ = this.store$.select(selectToken);

    // Redirect
    this.token$.subscribe( 
      (token: Token) => {
        if (!token) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  userInfo() {
    this.modalService.open(UserInfoComponent);
  }

  logout() {

    // Clear token
    this.store$.dispatch(new TokenClearAction({}));
  }
}
