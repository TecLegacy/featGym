import { SelectedPage } from '@/shared/types';
import { images } from '@/constants';
import { motion } from 'framer-motion';

import Button from '@/shared/Button';
import useMediaQuery from '@/hooks/useMediaQuery';

import AnchorLink from 'react-anchor-link-smooth-scroll';

//delete late and add your own optimized images
import HomePageGraphic from '@/assets/HomePageGraphic.webp';
import SponsorRedBull from '@/assets/SponsorRedBull.webp';
import SponsorForbes from '@/assets/SponsorForbes.webp';
import SponsorFortune from '@/assets/SponsorFortune.webp';

interface Props {
  // type of any "setState" is void as it doesnt return anything
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const screenGreaterThan = useMediaQuery('(min-width: 1085px)');

  return (
    <>
      <section
        id="home"
        className={` mb-6 gap-16 bg-gray-20 py-10 md:h-full  md:pb-0`}
      >
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className={`mx-auto w-5/6  items-center  justify-center md:flex md:h-5/6 `}
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* Framer motion */}

          <motion.div
            className={` z-10  mt-32 mr-10 w-full md:basis-3/5`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* FeatGym Text */}
            <div className={`relative`}>
              <div
                className={`w-5/6 before:absolute before:-top-24 before:-left-16 before:z-[-1] md:before:content-evolvetext`}
              >
                {/* Main header text */}
                <div className=" md:max-w-[80%]">
                  <img src={images.GymText} alt="Home-section-image" />
                </div>
                {/* Motivation */}
              </div>
              <div className="mt-6 w-5/6 space-x-3 ">
                <p
                  className={` text-justify text-sm   leading-5 tracking-wide `}
                >
                  Unbeatable gym. Unparalleled Fitness Training Courses
                  Top-notch studios to achieve the body shapes you desire. Get
                  Your Dream Body Quickly.
                </p>
              </div>
            </div>

            {/* Join us */}
            <motion.div
              className={`mt-8 flex items-center gap-8 `}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Button setSelectedPage={setSelectedPage}>Join Now </Button>
              <AnchorLink
                className={` cursor-pointer text-sm font-bold text-primary-500 underline transition duration-200 hover:text-secondary-500`}
                href={`#${SelectedPage.ContactUs}`}
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                Learn More
              </AnchorLink>
            </motion.div>
          </motion.div>
          {/* Right side */}
          <div
            className={`mb-8  ml-[-5%]  items-center  pt-8   md:flex md:w-[42%] md:justify-center`}
          >
            {/* Fitness image */}
            <img src={HomePageGraphic} alt="fitness-girl-image" />
          </div>
        </motion.div>

        {/* Small Devices &Sponsors */}
        {screenGreaterThan && (
          <div className=" h-[150px]   w-full bg-primary-100 py-10 ">
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
