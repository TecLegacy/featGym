import HeadText from '@/shared/HeadText';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import { BenefitsType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import BenefitsCard from './BenefitsCard';
import Button from '@/shared/Button';

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

// Staggered motion animation
const parentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    heading: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    heading: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    heading: 'Expert and Pro Trainers',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className={` min-h-full `}>
      <motion.div
        className={`mx-auto   w-5/6 py-20 `}
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className={` mx-auto w-full`}>
          {/* HEADING TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HeadText word="More than just a gym">
              MORE THAN JUST A GYM
            </HeadText>

            <p
              className={`my-5 w-full text-justify text-sm leading-7 md:w-4/6 `}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              ullam veniam at quia veritatis, earum doloremque amet nemo. Nisi,
              iste!
            </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            className={` mt-7  items-center justify-between gap-8  md:flex `}
            // Animation class
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={parentContainer}
          >
            {benefits.map((item: BenefitsType) => (
              <BenefitsCard
                key={item.heading}
                setSelectedPage={setSelectedPage}
                heading={item.heading}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </motion.div>

          {/* GYM GRAPHIC & TEXT*/}
          <div
            className={`mt-16  items-center justify-between gap-20 md:mt-28 md:flex`}
          >
            {/* GYM GRAPHIC  */}
            <img
              className={`mx-auto`}
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
            <div>
              {/* TEXT */}
              <div>
                <div className=" relative ">
                  <div
                    className={` before: before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves`}
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <HeadText word="millions of happy members getting fit">
                        MILLION OF HAPPY MEMEBERS GETTINGS{' '}
                        <span className={` text-primary-500  `}>FIT</span>
                      </HeadText>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
                className={' mb-10   '}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className={` py-8 text-justify  leading-7`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  ipsa. Necessitatibus cumque doloremque quaerat fugiat
                  pariatur. Id reiciendis, corrupti magnam unde quos rem
                  repellendus, odit error et distinctio architecto dignissimos
                  inventore doloribus. Laboriosam libero minima sequi, rerum
                  facilis deserunt cum, eaque asperiores, facere perspiciatis
                  tempora.
                </p>
                <p className=" mb-6 text-justify  leading-7 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam veritatis libero esse quod nihil ea.
                </p>
              </motion.div>
              {/* BUTTON GRAPHIC */}
              <div className={` relative `}>
                <div
                  className={`before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles`}
                ></div>
                <Button setSelectedPage={setSelectedPage}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
