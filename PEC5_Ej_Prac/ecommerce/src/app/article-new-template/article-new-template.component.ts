import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'article-new-template',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
  templateForm: FormGroup;
  errorMsg : boolean = false;
  errorName : boolean = false;
  errorPrice : boolean = false;
  errorImg : string = '';

  constructor(private formBuilder: FormBuilder) {
    this.templateForm = this.formBuilder.group({
      name: '',
      price: 0,
      imgUrl: '',
      onSale: true
    });
  }

  submitInfo() {
    if (!(this.templateForm.touched)) {
      this.errorMsg = true;
    } else {
      if (this.templateForm.get('name')?.touched && this.templateForm.get('name')?.value === '') {
        this.errorName = true;
      } else {
        this.errorName = false;
      }

      if (this.templateForm.get('price')?.touched && this.templateForm.get('price')?.value === 0) {
        this.errorPrice = true;
      } else {
        this.errorPrice = false;
      }

      if (this.templateForm.get('imgUrl')?.touched && this.templateForm.get('imgUrl')?.value === '') {
        this.errorImg = 'empty';
      } else if (this.templateForm.get('imgUrl')?.touched && !this.templateForm.get('imgUrl')?.valid) {
        this.errorImg = 'url';
      } else {
        this.errorImg = '';
      }

      if (this.errorImg === '' && !this.errorName && !this.errorPrice && !this.errorMsg) {
        console.log("¡ÉXITO!");
      }
    } 
  }
}
