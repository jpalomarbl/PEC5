import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MyHeaderComponent } from './my-header/my-header.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MyHeaderComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
  toggle : string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    // Escucha el evento emitido por el hijo a través del servicio
    this.sharedService.eventoHijo.subscribe((data) => {
      this.toggle = data;

      console.log(this.toggle);
    });
  }

}
