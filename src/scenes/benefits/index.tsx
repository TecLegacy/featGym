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
        // onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        <div className={` mx-auto w-full`}>
          {/* HEADING TEXT */}
          <div>
            <HeadText word="More than just a gym">
              MORE THAN JUST A GYM
            </HeadText>

            <p className={`my-5 w-full text-sm md:w-4/6`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              ullam veniam at quia veritatis, earum doloremque amet nemo. Nisi,
              iste!
            </p>
          </div>

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
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
