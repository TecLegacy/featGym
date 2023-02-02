import { Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/outline';

import { images } from '@/constants';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '@/shared/Button';

import Links from './Links';

import { useState } from 'react';

interface Props {
  isTop: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTop, selectedPage, setSelectedPage }: Props) => {
  const [menuToggle, setMenuToggle] = useState<Boolean>(false);

  const flexBetween = `flex  items-center justify-between `;
  const screenGreaterThan = useMediaQuery('(min-width: 1085px)');

  //Pages
  const navLinks = ['Home', 'Our Classes', 'Benefits', 'Contact Us'];

  const navScroll = isTop ? '' : 'bg-primary-100 drop-shadow-md  ';
  return (
    <>
      <nav
        className={`${navScroll} ${flexBetween} fixed top-0 z-30 w-full py-6 opacity-90`}
      >
        <div className={`  ${flexBetween} mx-auto   w-5/6 `}>
          {/* left side logo */}
          <img src={images.Logo} alt="Logo" className={` h-16 w-28 `} />

          {/* Right side Responsive design*/}
          {screenGreaterThan ? (
            <div className={` w-4/6 gap-16  `}>
              <div className={`${flexBetween} w-full   `}>
                <div className={`${flexBetween}  gap-9 text-sm`}>
                  {/* Nav item - interface string */}
                  {navLinks.map((links, i) => (
                    <Links
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={links}
                      key={`#${i}+links`}
                      id={`#${i}+ ${links}`}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-7  `}>
                  <p>Sing In</p>

                  <Button setSelectedPage={setSelectedPage}>
                    Become a Member
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Menu toggle
            <button
              className={`flex cursor-pointer items-center  justify-center rounded-full bg-secondary-500 p-2`}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Bars3BottomRightIcon
                className={` h-6 w-6 px-1 py-1 text-yellow-50 transition  duration-500 hover:text-[#a761bfb6]`}
              />
            </button>
          )}
        </div>
      </nav>
      <div>
        {/* Mobile Model and backdrop */}
        {!screenGreaterThan && menuToggle && (
          // BACKDROP
          <div
            className={` fixed bottom-0 right-0 z-40  h-full w-full  
             backdrop-blur-[2px]
            `}
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <div
              className={`fixed bottom-0 right-0 z-50 h-full w-[300px] bg-primary-100 
              opacity-90
               drop-shadow-xl
            transition-width duration-500 ease-in`}
            >
              <div className={`  flex items-center  justify-end `}>
                {/* CLOSE ICON */}

                <XCircleIcon
                  className={`absolute right-12 top-12 h-10 w-10 cursor-pointer text-[#a761bfb6] hover:text-primary-300  `}
                  onClick={() => setMenuToggle(!menuToggle)}
                />

                {/* MENU ITEMS */}
                <div
                  className={` absolute top-28 right-20 ${flexBetween}  flex-col  gap-10 space-x-5 text-2xl font-semibold`}
                >
                  {navLinks.map((links, i) => (
                    <Links
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={links}
                      key={`#${i}+links`}
                      id={`#${i}+ ${links}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
