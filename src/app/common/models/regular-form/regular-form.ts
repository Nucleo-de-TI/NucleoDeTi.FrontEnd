import { IRegularTextInput } from "../regular-text-input/regular-text-input";

export interface IRegularFormSubmitButton {
      innerText: string;
      callback: () => Promise<void>;
}

export interface IRegularForm {
      inputs: IRegularTextInput[][]
      submitButton: IRegularFormSubmitButton;
}