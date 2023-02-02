import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
  heading: string;
  description: string;
  icon: JSX.Element;
}

const variant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitsCard = ({
  setSelectedPage,
  heading,
  icon,
  description,
}: Props) => {
  return (
    // <motion.div
    //   variants={variant}
    //   className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    // >
    //   <div className="mb-4 flex justify-center">
    //     <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
    //       {icon}
    //     </div>
    //   </div>

    //   <h4 className="font-bold">{heading}</h4>
    //   <p className="my-3">{description}</p>
    //   <AnchorLink
    //     className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
    //     onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    //     href={`#${SelectedPage.ContactUs}`}
    //   >
    //     <p>Learn More</p>
    //   </AnchorLink>
    // </motion.div>
    <>
      <div className={`items-center justify-between md:flex`}>
        <div>
          <div className={`   rounded-lg bg-primary-100 px-2 py-2`}>
            {icon}{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsCard;
