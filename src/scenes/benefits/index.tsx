import HeadText from '@/shared/HeadText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className={` min-h-full `}>
      <motion.div
        className={`mx-auto w-5/6  py-20 `}
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        <div className={` mx-auto w-5/6`}>
          {/* HEADING TEXT */}
          <div>
            <HeadText word="More than just a gym">
              MORE THAN JUST A GYM
            </HeadText>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              ullam veniam at quia veritatis, earum doloremque amet nemo. Nisi,
              iste!
            </p>
          </div>

          {/* CARD */}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
