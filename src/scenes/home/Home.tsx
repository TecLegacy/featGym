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
        className={` gap-16 bg-gray-20 py-10 md:h-full md:pb-0 `}
      >
        {/* IMAGE AND MAIN HEADER */}
        <div
          className={`mx-auto w-5/6  items-center  justify-center md:flex md:h-5/6 `}
        >
          <div className={` z-10  mt-32 mr-10 w-full md:basis-3/5`}>
            {/* FeatGym Text */}
            <div className={`relative`}>
              <div
                className={`w-5/6 before:absolute before:-top-24 before:-left-16 before:z-[-1] md:before:content-evolvetext`}
              >
                {/* Main header text */}
                <div className=" md:max-w-[80%]">
                  <img
                    className={``}
                    src={images.GymText}
                    alt="Home-section-image"
                  />
                </div>
                {/* Motivation */}
              </div>
              <div className="mt-6 w-5/6 space-x-3 ">
                <p>
                  Unbeatable gym. Unparalleled Fitness Training Courses
                  Top-notch studios to achieve the body shapes you desire. Get
                  Your Dream Body Quickly.
                </p>
              </div>
            </div>

            {/* Join us */}
            <div className={`mt-8 flex items-center gap-8`}>
              <Button setSelectedPage={setSelectedPage}>Join Now </Button>
              <AnchorLink
                className={` cursor-pointer text-sm font-bold text-primary-500 underline transition duration-200 hover:text-secondary-500`}
                href={`#${SelectedPage.ContactUs}`}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                Learn More
              </AnchorLink>
            </div>
          </div>
          {/* Right side */}
          <div
            className={`mb-8  ml-[-5%]  items-center  pt-8   md:flex md:w-[42%] md:justify-center`}
          >
            {/* Fitness image */}
            <img src={HomePageGraphic} alt="fitness-girl-image" />
          </div>
        </div>

        {/* Small Devices & Sponsors */}
        {screenGreaterThan && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
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
