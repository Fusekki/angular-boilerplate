import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  standalone: true
})
export class Form {
  formGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('^[A-Za-z0-9!#$%&\'*+/=?^_‘{|}~-]+(?:\\.[A-Za-z0-9!#$%&\'*+/=?^_‘{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])$')]))
    })
  }

  getErrorMessage(fieldName: string): string {
    switch(fieldName) {
      case 'email':
        return this.formGroup.get('email')?.hasError('required') ?
          "You must enter a valid email address" :
          this.formGroup.get('email')?.hasError('pattern') ?
          "Email must be of a valid pattern" :
          "";
      case 'name':
        return this.formGroup.get('name')?.hasError('required') ?
          "Name is required" : ""

      case 'phone':
        return this.formGroup.get('phone')?.hasError('required') ?
        "Phone is required" : ""
      default:
        return '';
    }
  }

}
