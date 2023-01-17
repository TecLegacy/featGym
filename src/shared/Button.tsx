import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

interface Props {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const Button = ({ children, setSelectedPage }: Props) => {
  return (
    <>
      <AnchorLink
        className={` bg- cursor-pointer rounded-md bg-secondary-500 px-4 py-2 transition duration-500  hover:bg-primary-500 hover:text-primary-100`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        {children}
      </AnchorLink>
    </>
  );
};

export default Button;
