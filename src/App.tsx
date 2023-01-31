import Navbar from '@/scenes/navbar';

import { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from '@/scenes/home';

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
      {/* NAVBAR */}
      {/* <div className="app bg-gray-20">
        <Navbar
          isTop={isTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />

        <div id="benifits" className={` h-full bg-red-400`}>
          T
        </div>

        <div id="contactus" className={` h-full bg-cyan-400`}>
          P
        </div>
      </div> */}
      {/* Testing min width/height */}
      {/* <div className={` h-full bg-blue-400`}> */}
      <div className={` min-h-[200px]  bg-red-400`}>
        <div className={`  `}>c</div>
        in
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
