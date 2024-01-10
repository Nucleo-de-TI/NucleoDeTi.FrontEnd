import { Component, Input, OnInit } from '@angular/core';
import { IRegularForm } from '../../models/regular-form/regular-form';
import { CommonModule } from '@angular/common';
import { RegularTextInputComponent } from '../regular-text-input/regular-text-input.component';
import { RegularFlexBoxComponent } from '../regular-flex-box/regular-flex-box.component';
import { BorderTextButtonComponent } from '../border-text-button/border-text-button.component';
import { MediumTextComponent } from '../medium-text/medium-text.component';
import { BorderTextLoadButtonComponent } from '../border-text-load-button/border-text-load-button.component';

@Component({
  selector: 'app-regular-form',
  standalone: true,
  templateUrl: './regular-form.component.html',
  styleUrl: './regular-form.component.scss',
  imports: [
    CommonModule,
    RegularTextInputComponent,
    RegularFlexBoxComponent,
    BorderTextButtonComponent,
    MediumTextComponent,
    BorderTextLoadButtonComponent,
  ],
})
export class RegularFormComponent {
  @Input() model!: IRegularForm;
  _loadButtonController = {
    isLoading: false,
  };

  get loadButtonController() {
    return this._loadButtonController;
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    this._loadButtonController.isLoading = true;

    await this.model.submitButton.callback();

    this._loadButtonController.isLoading = false;
  }
}
