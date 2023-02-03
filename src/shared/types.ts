export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  ContactUs = 'contactus',
  OurClasses = 'ourclasses',
}

export interface BenefitsType {
  icon: JSX.Element;
  heading: string;
  description: string;
}

export interface OurClassesType {
  name: string;
  description?: string;
  image: string;
}
