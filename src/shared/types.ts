export enum SelectedPage {
  Home = 'home',
  Benifits = 'benifits',
  ContactUs = 'contactus',
  OurClasses = 'ourclasses',
}

export interface BenefitsType {
  icon: JSX.Element;
  heading: string;
  description: string;
}
