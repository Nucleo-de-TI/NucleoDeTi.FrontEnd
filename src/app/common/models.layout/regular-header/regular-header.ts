export interface ILink {
  href: string;
  icon: string;
  innerText?: string;
  selected?: boolean
}

export interface IButton {
  icon: string;
  callback: () => void;
}

export interface ISocialHub {
  title: string;
  link: string;
  links: ILink[];
  buttons: IButton[];
}

export interface IAction {
  links: ILink[];
}

export interface IDefaultHeader {
  socialHub?: ISocialHub;
  action: IAction;
}
