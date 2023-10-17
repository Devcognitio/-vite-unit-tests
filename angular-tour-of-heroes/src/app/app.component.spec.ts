import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let compoent: AppComponent;

  beforeEach(() => {
    compoent = new AppComponent();
  });

  it('should create the app', () => {
    expect(compoent).toBeTruthy();
  });


  it('should create the app', () => {

    compoent.doFn();

    expect(compoent.title).toBeTruthy();
  });


});
