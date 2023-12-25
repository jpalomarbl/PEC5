import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'article-new-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {
  reactiveForm: FormGroup;
  errorMsg : boolean = false;
  errorName : boolean = false;
  errorNameCustom : boolean = false;
  errorPrice : boolean = false;
  errorImg : string = '';

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required, this.nameArticleValidator()]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      imgUrl: ['', [Validators.required, Validators.pattern('^(https?:\/\/)[a-zA-Z0-9]+[.][a-zA-Z]{2,3}$')]],
      onSale: true
    });

    this.reactiveForm.valueChanges.subscribe(() => {
      this.submitInfo();
    });
  }

  nameArticleValidator() {
    let words: string[] = ["Prueba", "Test", "Mock", "Fake"];

    return (control: any) => {
      if (words.includes(control.value)) {
        return { nameArticle: true };
      }
      return null;
    };
  }

  submitInfo() {
    if (!(this.reactiveForm.touched)) {
      this.errorMsg = true;
    } else {
      this.errorMsg = false;

      if (this.reactiveForm.get('name')?.hasError('nameArticle')) {
        this.errorNameCustom = true;
      } else if (this.reactiveForm.get('name')?.touched && !this.reactiveForm.get('name')?.valid) {
        this.errorNameCustom = false;
        this.errorName = true;
      } else {
        this.errorName = false;
      }

      if (this.reactiveForm.get('price')?.touched && !this.reactiveForm.get('price')?.valid) {
        this.errorPrice = true;
      } else {
        this.errorPrice = false;
      }

      if (this.reactiveForm.get('imgUrl')?.touched && this.reactiveForm.get('imgUrl')?.hasError('required')) {
        this.errorImg = 'empty';
      } else if (this.reactiveForm.get('imgUrl')?.touched && this.reactiveForm.get('imgUrl')?.hasError('pattern')) {
        this.errorImg = 'url';
      } else {
        this.errorImg = '';
      }

      if (this.errorImg === '' && !this.errorName && !this.errorNameCustom && !this.errorPrice && !this.errorMsg) {
        console.log("¡ÉXITO!");
      }
    } 
  }
}
