import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-uniso-icon',
  standalone: true,
  imports: [],
  templateUrl: './regular-uniso-icon.component.html',
  styleUrl: './regular-uniso-icon.component.scss',
})
export class RegularUnisoIconComponent implements OnInit {
  @Input() src?: string;

  ngOnInit(): void {
    if (!this.src) {
      this.src = './assets/images/uniso/icon.png';
    }
  }
}
