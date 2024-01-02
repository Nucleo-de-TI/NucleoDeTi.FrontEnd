import { IIconLink } from '../../models/icon-link/icon-link';

export interface IInfo {
  title: string;
  messages: string[];
}

export interface IRegularFooter {
  infos: IInfo[];
  links: IIconLink[];
}
