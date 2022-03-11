import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../services/api.service';
import { SignUpData } from '../data-models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  sd: SignUpData;

  signupForm = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    company: new FormControl(''),
  });

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private toastService: ToastrService) { }

  ngOnInit() {
  }

  submit() {
    this.sd = {
      email: this.signupForm.value.email,
      first_name: this.signupForm.value.first_name,
      last_name: this.signupForm.value.last_name,
      company: this.signupForm.value.company
    };
    this.apiService.signupRequest(this.sd).subscribe(
      _response => {},
      _error => this.toastService.error('Bad Request!', 'Sign Up'),
      () => {
        this.toastService.success('Accounted Requested!', 'Sign Up');
        this.router.navigate(['/login']);
      });
  }
}
