import HeadText from '@/shared/HeadText';
import { SelectedPage, OurClassesType } from '@/shared/types';
import { motion } from 'framer-motion';
import Classes from './Classes';
// ReFactor Later
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';

const ourClasses: Array<OurClassesType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description: '',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    image: image5,
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image6,
  },
];

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section
        className={` min-h-[80vh] w-full bg-primary-100`}
        id="ourclasses"
      >
        <motion.div
          className={`  mx-auto mt-32 w-5/6 pb-10`}
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <div
            className={`  flex  items-center  justify-center 
            py-16
            `}
          >
            {/* TEXT */}
            <div className=" md:w-3/4 ">
              <motion.div
                className=" text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: 70 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HeadText word="our classes">Our Classes</HeadText>
                <p className=" py-4  leading-relaxed ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam iste enim blanditiis quae consectetur dolores alias.
                  Nihil aspernatur voluptatum sequi reiciendis sint quas dolorem
                  fugiat impedit enim incidunt exercitationem et ducimus esse
                  cumque, beatae fuga ipsa, qui fugit, iste voluptatem!
                </p>
              </motion.div>
            </div>
          </div>

          {/* SCROLL EFFECT */}
          <div className="h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {ourClasses.map((item: OurClassesType, index) => (
                <Classes
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default index;
