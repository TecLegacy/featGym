import { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';

import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';

function App() {
  //Current Active page state
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTop, setIsTop] = useState<boolean>(true);

  //Track Scroll y
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY > 50) setIsTop(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTop={isTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
