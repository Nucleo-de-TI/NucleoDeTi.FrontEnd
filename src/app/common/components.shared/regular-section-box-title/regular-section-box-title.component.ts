import { Component } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";

@Component({
  selector: 'app-regular-section-box-title',
  standalone: true,
  imports: [RegularTextComponent],
  templateUrl: './regular-section-box-title.component.html',
  styleUrl: './regular-section-box-title.component.scss'
})
export class RegularSectionBoxTitleComponent {

}
