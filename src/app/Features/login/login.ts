import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Particulas } from '../../shared/particulas-template/particulas';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, ReactiveFormsModule, Particulas],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  Form!: FormGroup;
  hayError = false;
  constructor(
    private Fb: FormBuilder,
    private router: Router,
  ) {}
  ngOnInit() {
    this.Form = this.Fb.group({
      nombre: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  OnSubmit() {
    const { nombre, password } = this.Form.value;
    localStorage.setItem('nombre', 'pablo');
    localStorage.setItem('password', '12345');
    if (nombre === 'pablo' && password === '12345') {
      this.hayError = false;
      this.router.navigate(['/Home']);
    } else {
      this.hayError = true;
      setTimeout(() => {
        this.hayError = false;
      }, 3000);
    }
  }
}
