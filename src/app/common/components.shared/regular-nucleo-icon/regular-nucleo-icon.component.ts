import { Component, Input, OnInit } from '@angular/core';
import { RegularBrandImageComponent } from "../regular-brand-image/regular-brand-image.component";

@Component({
    selector: 'app-regular-nucleo-icon',
    standalone: true,
    templateUrl: './regular-nucleo-icon.component.html',
    styleUrl: './regular-nucleo-icon.component.scss',
    imports: [RegularBrandImageComponent]
})
export class RegularNucleoIconComponent implements OnInit {
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = './assets/images/brand/icon.png';
    }
  }
}
