import { SelectedPage } from '@/shared/types';
import { images } from '@/constants';

import Button from '@/shared/Button';
import useMediaQuery from '@/hooks/useMediaQuery';

import AnchorLink from 'react-anchor-link-smooth-scroll';

//delete late and add your own optimized images
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const screenGreaterThan = useMediaQuery('(min-width: 1085px)');

  return (
    <>
      <section
        id="home"
        className={`gap-16 bg-gray-20 py-10 md:h-full md:pb-0 `}
      >
        {/* IMAGE AND MAIN HEADER */}
        <div
          className={` ml- mx-auto w-5/6  items-center  justify-center md:flex md:h-5/6 `}
        >
          <div className={` z-10  mt-32 mr-10 md:basis-3/5`}>
            {/* FeatGym Text */}
            <div className={`relative`}>
              <div
                className={`-top before:absolute  before:-top-24 before:-left-16 before:z-[-1] md:before:content-evolvetext`}
              >
                {/* Main header text */}
                <div className={``}>
                  <img src={images.GymText} alt="Home-section-image" />
                </div>
                {/* Motivation */}
                <div className={` flex `}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    nemo atque deserunt expedita voluptatibus fuga asperiores
                    aliquid officiis unde nulla iusto nesciunt, enim debitis
                    tempora facere consectetur. A, asperiores officiis.
                  </p>
                </div>
              </div>
            </div>

            {/* Join us */}
            <div>
              <Button setSelectedPage={setSelectedPage}>Join Now </Button>
              <AnchorLink
                className={` cursor-pointer text-sm font-bold text-primary-500 underline`}
                href={`#${SelectedPage.ContactUs}`}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                Learn More
              </AnchorLink>
            </div>
          </div>
          {/* Right side */}
          <div
            className={` w-[42%]   items-center  justify-center   pt-8 md:flex`}
          >
            {/* Fitness image */}
            <img src={HomePageGraphic} alt="fitness-girl-image" />
          </div>
        </div>

        {/* Sponsors */}
        {screenGreaterThan && (
          <div>
            <div>
              <div>
                <img src={SponsorForbes} alt="Sponsor-Forbes" />
                <img src={SponsorFortune} alt="Sponsor-Fortune" />
                <img src={SponsorRedBull} alt="Sponsor-RedBull" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
