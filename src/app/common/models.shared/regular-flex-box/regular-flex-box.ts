export interface IStyle {
  'flex-wrap'?: string;
  'flex-direction'?: string;
  'align-items'?: string;
  'justify-content'?: string;
  gap?: '8px' | '28px' | '42px' | '60px' | '100px';
}

export interface IMedia {
  'min-width': number;
  style: IStyle;
}

export interface IRegularFlexBox {
  media?: IMedia[];
  style: IStyle;
}
