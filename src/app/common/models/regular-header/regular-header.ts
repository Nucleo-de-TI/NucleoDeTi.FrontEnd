import { IIconLink } from "../../models/icon-link/icon-link";

export interface IActionLink extends IIconLink {
  innerText: string;
  selected?: boolean
}

export interface IAction {
  links: IActionLink[];
}

export interface IRegularHeader {
  action: IAction;
}
