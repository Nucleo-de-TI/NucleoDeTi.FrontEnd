import { IIconButton } from "../../models.shadow/icon-button/icon-button";
import { IIconLink } from "../../models.shadow/icon-link/icon-link";
import { ILink } from "../../models.shadow/link/link";

export interface ISocialHub {
  title: ILink;
  links: IIconLink[];
  buttons: IIconButton[];
}

export interface IActionLink extends IIconLink {
  innerText: string;
  selected?: boolean
}

export interface IAction {
  links: IActionLink[];
}

export interface IRegularHeader {
  socialHub?: ISocialHub;
  action: IAction;
}
