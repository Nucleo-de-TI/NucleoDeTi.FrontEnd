export interface ICourseTitle {
  icon: string;
  innerText: string;
}

export interface ICourseInfoText {
  title: string;
  text: string;
}

export interface ICourseAccordion {
  title: string;
  list: string[];
}

export interface ICourse {
  title: ICourseTitle;
  infoTexts: ICourseInfoText[];
  accordions: ICourseAccordion[];
}
