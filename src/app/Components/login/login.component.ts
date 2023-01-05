import {Component, EventEmitter, OnInit} from '@angular/core';
import { Input, Output } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Output() logingData = new EventEmitter<{username: string, password: string}>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmitted(event: Event) {
    event.preventDefault()
    if (this.form.valid) {
      this.logingData.emit({
        username: this.Username?.value,
        password: this.Password?.value
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
