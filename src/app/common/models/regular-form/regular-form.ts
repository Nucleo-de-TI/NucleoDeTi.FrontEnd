export interface IRegularFormInput {
      name: string;
      type: string;
      value: string;
      placeholder: string;
}

export interface IRegularFormSubmitButton {
      innerText: string;
      callback: () => void;
}

export interface IRegularForm {
      inputs: IRegularFormInput[][]
      submitButton: IRegularFormSubmitButton;
}