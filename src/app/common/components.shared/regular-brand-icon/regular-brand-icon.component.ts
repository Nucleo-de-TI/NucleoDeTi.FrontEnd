import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-brand-icon',
  standalone: true,
  imports: [],
  templateUrl: './regular-brand-icon.component.html',
  styleUrl: './regular-brand-icon.component.scss'
})
export class RegularBrandIconComponent implements OnInit{
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = "./assets/images/brand/icon.png"
    }
  }
}
