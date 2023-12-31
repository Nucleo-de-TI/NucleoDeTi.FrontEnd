export interface IRegularFlexBoxStyle {
  'flex-wrap'?: string;
  'flex-direction'?: string;
  'align-items'?: string;
  'justify-content'?: string;
  gap?: '8px' | '28px' | '42px' | '60px' | '100px';
}

export interface IRegularFlexBoxMedia {
  'min-width': number;
  style: IRegularFlexBoxStyle;
}

export interface IRegularFlexBox {
  media?: IRegularFlexBoxMedia [];
  style: IRegularFlexBoxStyle;
}
