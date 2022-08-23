import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    usuario: [''],
    senha: ['']
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value)
      .subscribe({
        next: id => this.loginObserver(id)
      });
  }

  loginObserver(id: number) {
    if (id) {
      localStorage.setItem("ESSEEUJALI_AUTH", JSON.stringify({ id }));
      this.snackBar.open('Login realizado com Sucesso!', 'X', {
        duration: 3000,
      });
      this.router.navigate(['/livros']);
      return;
    } else {
      localStorage.clear();
      this.snackBar.open('Usuário ou senha inválidos!', 'X', {
        duration: 5000
      });
    }
  }

}
