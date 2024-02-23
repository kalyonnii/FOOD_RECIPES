import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  // loginForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value); // Handle login logic (e.g., authenticate with backend)
  //   }
  // }



  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

  onLogin(): void {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(credentials).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful!' });
        this.router.navigate(['/dashboard']);
        console.log('Login successful', response);
        // Handle success (e.g., store user session, redirect, etc.)
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid email or password' });
        console.error('Login failed', error);
        // Handle error (e.g., show error message)
      }
    );
  }

}
