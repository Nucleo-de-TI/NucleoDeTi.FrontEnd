import { Component } from '@angular/core';
import { RegularTextComponent } from "../regular-text/regular-text.component";

@Component({
  selector: 'app-large-text',
  standalone: true,
  imports: [RegularTextComponent],
  templateUrl: './large-text.component.html',
  styleUrl: './large-text.component.scss'
})
export class LargeTextComponent {

}
