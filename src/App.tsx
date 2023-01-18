import Navbar from '@/scenes/navbar';

import { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/home/Home';

function App() {
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
      {/* NAVBAR */}
      <div className="app bg-gray-20">
        <Navbar
          isTop={isTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Home setSelectedPage={setSelectedPage} />
      </div>

      <div id="benifits" className={` h-full bg-red-400`}>
        T
      </div>

      <div id="contactus" className={` h-full bg-cyan-400`}>
        P
      </div>
    </>
  );
}

export default App;
