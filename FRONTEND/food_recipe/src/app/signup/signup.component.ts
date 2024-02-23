import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]
})
export class SignupComponent {

  // signupForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.signupForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  // onSignup() {
  //   if (this.signupForm.valid) {
  //     console.log(this.signupForm.value); // Handle signup logic (e.g., send data to backend)
  //   }
  // }

  username: string = '';
  email: string = '';
  password: string = '';
  registrationSuccess: boolean = false;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

  onRegister(): void {
    const userDetails = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.authService.register(userDetails).subscribe(
      (response) => {
        this.registrationSuccess = true;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration successful!' });
        console.log('Registration successful', response);

        // Handle success (e.g., show success message, redirect, etc.)
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Registration failed. Please try again.' });
        console.error('Registration failed', error);
        // Handle error (e.g., show error message)
      }
    );
  }
  goToLogin(): void {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }

}
