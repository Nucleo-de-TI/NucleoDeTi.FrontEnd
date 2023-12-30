import { IIconLink } from '../../models.shadow/icon-link/icon-link';

export interface IInfo {
  title: string;
  messages: string[];
}

export interface IRegularFooter {
  infos: IInfo[];
  links: IIconLink[];
}
