export interface IRegularTextInput {
      name: string;
      type: 'email' | 'text' | 'password' | 'textarea';
      placeholder: string;
      value?: string;
      errorMessage?: string
}