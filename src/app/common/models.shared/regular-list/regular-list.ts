import { IRegularFlexBoxMedia, IRegularFlexBoxStyle } from "../regular-flex-box/regular-flex-box";

export interface IRegularListStyle extends IRegularFlexBoxStyle{
      'list-style'?: 'none' | 'disc'
}

export interface IRegularList {
  media?: IRegularFlexBoxMedia[];
  style: IRegularListStyle;
}