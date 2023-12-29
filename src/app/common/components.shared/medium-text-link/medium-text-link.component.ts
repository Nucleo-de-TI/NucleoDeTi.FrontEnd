import { Component, Input } from '@angular/core';
import { MediumTextComponent } from "../medium-text/medium-text.component";

@Component({
    selector: 'app-medium-text-link',
    standalone: true,
    templateUrl: './medium-text-link.component.html',
    styleUrl: './medium-text-link.component.scss',
    imports: [MediumTextComponent]
})
export class MediumTextLinkComponent {
  @Input() href!: string;
  @Input() target!: string;
}
