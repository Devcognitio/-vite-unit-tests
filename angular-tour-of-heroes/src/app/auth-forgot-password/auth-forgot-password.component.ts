import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router"

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html',
  styleUrls: ['./auth-forgot-password.component.scss']
})
export class AuthForgotPasswordComponent implements OnInit {

  public formGroup!: FormGroup

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['example@business.com', [Validators.required, Validators.email]],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()
    this.router.navigate(['/app'])
  }

  isValid(name: string) {
    const instance = this.formGroup.get(name)
    return instance?.invalid && (instance?.dirty || instance?.touched)
  }
}
