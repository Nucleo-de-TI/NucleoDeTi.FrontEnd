import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-brand-logo',
  standalone: true,
  imports: [],
  templateUrl: './regular-brand-logo.component.html',
  styleUrl: './regular-brand-logo.component.scss'
})
export class RegularBrandLogoComponent {
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = "./assets/images/brand/logo.png"
    }
  }
}
