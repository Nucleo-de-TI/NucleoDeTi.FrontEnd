import { Component, Input } from '@angular/core';
import { IRegularForm } from '../../models/regular-form/regular-form';
import { CommonModule } from '@angular/common';
import { RegularTextInputComponent } from "../regular-text-input/regular-text-input.component";
import { RegularFlexBoxComponent } from "../regular-flex-box/regular-flex-box.component";

@Component({
    selector: 'app-regular-form',
    standalone: true,
    templateUrl: './regular-form.component.html',
    styleUrl: './regular-form.component.scss',
    imports: [CommonModule, RegularTextInputComponent, RegularFlexBoxComponent]
})
export class RegularFormComponent {
  @Input() model!: IRegularForm;
}
