import { Component, Input, OnInit } from '@angular/core';
import { RegularBrandImageComponent } from "../regular-brand-image/regular-brand-image.component";

@Component({
    selector: 'app-regular-nucleo-logo',
    standalone: true,
    templateUrl: './regular-nucleo-logo.component.html',
    styleUrl: './regular-nucleo-logo.component.scss',
    imports: [RegularBrandImageComponent]
})
export class RegularNucleoLogoComponent implements OnInit {
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = './assets/images/brand/logo.png';
    }
  }
}
