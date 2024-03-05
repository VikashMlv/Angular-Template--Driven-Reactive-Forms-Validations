import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {

     

  reactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    tempaddress: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
    nativeaddress: new FormControl('', [
      Validators.required,
      Validators.minLength(15), Validators.maxLength(50)
    ]),
    zip: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cities: new FormControl('', [Validators.required]),
  });



  handleSubmit() {
    console.log("");
  }
}
