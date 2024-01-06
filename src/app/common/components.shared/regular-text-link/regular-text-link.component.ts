import { Component, Input, OnInit } from '@angular/core';
import { RegularTextComponent } from '../regular-text/regular-text.component';
import { IRegularLink } from '../../models/regular-link/regular-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-text-link',
  standalone: true,
  templateUrl: './regular-text-link.component.html',
  styleUrl: './regular-text-link.component.scss',
  imports: [CommonModule, RegularTextComponent],
})
export class RegularTextLinkComponent implements OnInit {
  @Input() href?: string;
  @Input() target?: string;
  @Input() model?: IRegularLink;
  linkClassController = {
    '--blue': false,
    '--light-blue': false,
  };

  ngOnInit(): void {
    if (this.model && this.model.style.color) {
      this.linkClassController[`--${this.model.style.color}`] = true;
    }
  }
}
