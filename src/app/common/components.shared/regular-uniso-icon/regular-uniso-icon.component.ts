import { Component, Input, OnInit } from '@angular/core';
import { RegularBrandImageComponent } from "../regular-brand-image/regular-brand-image.component";

@Component({
    selector: 'app-regular-uniso-icon',
    standalone: true,
    templateUrl: './regular-uniso-icon.component.html',
    styleUrl: './regular-uniso-icon.component.scss',
    imports: [RegularBrandImageComponent]
})
export class RegularUnisoIconComponent implements OnInit {
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = './assets/images/uniso/icon.png';
    }
  }
}
