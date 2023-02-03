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
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={variant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-3xl border-2 border-gray-300 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{heading}</h4>
      <p className="my-3 tracking-wide">{description}</p>
      <AnchorLink
        className="cursor-pointer text-sm font-bold text-primary-500 underline transition duration-200 hover:text-secondary-500 "
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
    // <>
    //   {/* TEST CODE START */}
    //   {/* <div className={` mt-10 rounded-sm border-4 border-gray-400 py-16 px-8 `}> */}
    //   {/* <div
    //     className={`items-center justify-between  rounded-sm border-4 border-gray-400 py-16 px-8 md:flex `}
    //   >
    //     <div className={` flex flex-col items-center justify-center gap-4   `}>
    //       <div
    //         className={`rounded-2xl  border-2 border-solid border-gray-300 `}
    //       >
    //         <div className={`rounded-2xl bg-primary-100 px-2 py-2`}>{icon}</div>
    //       </div>
    //       <div>{heading}</div>
    //     </div>
    //   </div> */}
    //   {/* </div> */}
    // {/* TEST CODE END */}
    // </>
  );
};

export default BenefitsCard;
