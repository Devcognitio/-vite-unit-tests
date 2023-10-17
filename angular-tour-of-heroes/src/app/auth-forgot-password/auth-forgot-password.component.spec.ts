import { FormBuilder, Validators } from '@angular/forms';
import { AuthForgotPasswordComponent } from './auth-forgot-password.component';
import {  Router } from '@angular/router';

describe('AuthForgotPasswordComponent', () => {
  let component: AuthForgotPasswordComponent;

  let formBuilder: any;
  let router: Partial<Router>
  beforeEach(async () => {

    formBuilder = {
      group: ()=> ({})
    }

    router = {
      navigate: ()=> ({}) as Promise<boolean>,
    } as unknown as Router;
    component = new AuthForgotPasswordComponent(formBuilder, router as Router);
  });


  it('should create', () => {

    const spy = spyOn(formBuilder, 'group').and.returnValue({
      mock: 'data',
    });
    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith({
      email: ['example@business.com', [Validators.required, Validators.email]],
    }, {updateOn: 'blur'});

    expect(component.formGroup).toEqual({
      mock: 'data',
    } as any);


  });
});
