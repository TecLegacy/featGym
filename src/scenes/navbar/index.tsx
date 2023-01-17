import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import logo from '@/asset/Featgym.svg';
import { SelectedPage } from '@/shared/types';

import Links from './Links';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = `flex  items-center justify-between `;

  const navLinks = ['Home', 'Our Classes', 'Benifits', 'Contact Us'];

  return (
    <>
      <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto  w-5/6 `}>
          {/* left side logo */}
          <img src={logo} alt="Logo" className={` h-16 w-28 `} />

          {/* right side */}
          <div className={`  w-5/6     gap-16  `}>
            <div className={`${flexBetween} w-full   `}>
              <div className={`${flexBetween}  gap-8 text-sm`}>
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
              <div className={`${flexBetween} gap-8 `}>
                <p>Sing In</p>
                <button> Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
