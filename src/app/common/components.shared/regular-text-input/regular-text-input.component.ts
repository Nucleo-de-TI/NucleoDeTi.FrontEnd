import { Component, Input, OnInit } from '@angular/core';
import { IRegularFormInput } from '../../models/regular-form/regular-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-text-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-text-input.component.html',
  styleUrl: './regular-text-input.component.scss',
})
export class RegularTextInputComponent implements OnInit {
  @Input() model!: IRegularFormInput;
  private _inputType!: string;
  private _inputId: string;
  private _showPasswordButtonController = {
    icon: 'bi bi-eye',
    isShowingPassword: false,
  };

  constructor() {
    this._inputId = Math.floor(100000 + Math.random() * 900000).toString();
  }

  get inputType() {
    return this._inputType;
  }

  get inputId() {
    return this._inputId;
  }

  get showPasswordButtonController() {
    return this._showPasswordButtonController;
  }

  ngOnInit(): void {
    this._inputType = JSON.parse(JSON.stringify(this.model)).type
  }

  onEyeButtonClick() {
    if (this._showPasswordButtonController.isShowingPassword) {
      this._showPasswordButtonController.icon = 'bi bi-eye';
      this.model.type = 'password';
    } else {
      this._showPasswordButtonController.icon = 'bi bi-eye-slash';
      this.model.type = 'text';
    }

    this._showPasswordButtonController.isShowingPassword =
      !this._showPasswordButtonController.isShowingPassword;
  }
}
