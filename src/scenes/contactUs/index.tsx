import HeadText from '@/shared/HeadText';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.webp';

import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const formHandler = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const formInputStyles = ` mb-6 w-[100%]  rounded-lg  bg-red-300 px-8 py-2  text-lg placeholder-slate-50  `;
  return (
    <>
      <section id="contactus" className="  mt-14 min-h-[80vh] w-full   ">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          <motion.div
            className={`  mx-auto   w-5/6  `}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* TEXT */}
            <div className=" my-4 gap-8 py-4">
              <HeadText word="join now">
                <span className="  text-primary-500">JOIN NOW</span> {''}
                TO GET IN SHAPE
              </HeadText>

              <p className=" my-4 py-4 text-justify leading-7 tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, veritatis consequuntur mollitia cum corporis delectus
                inventore, consectetur reiciendis doloremque voluptates possimus
                commodi beatae ipsum expedita ut laboriosam illum! Reiciendis
                error nesciunt dolorem accusantium, quasi ut!
              </p>
            </div>

            {/* Form & image */}
            <motion.div
              className={`mx-auto  w-full  justify-between py-4  md:flex`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                action="https://formsubmit.co/d08da8ebe6d4648d80b0ec35daff9e3e"
                method="POST"
                className=" w-full  flex-1 md:mr-5  "
                onSubmit={formHandler}
                target="_blank"
              >
                <input
                  type="text"
                  placeholder="😉  Name "
                  {...(register('Name'),
                  {
                    required: true,
                    maxLength: 20,
                  })}
                  className={formInputStyles}
                />
                {errors.Name && (
                  <p className="mt-1 text-primary-500 ">
                    {errors.Name?.type === 'required' &&
                      'Kindly fill the required field'}
                    {errors.Name?.type === 'maxLength' &&
                      'Your Name is to Long 🗿'}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="🕵️‍♀️  Email"
                  {...register('Email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className={formInputStyles}
                />
                {errors.Email && (
                  <p className=" mt-1 mb-1 text-primary-500">
                    {errors.Email?.type === 'required' &&
                      'Kindly fill the required field properly 🙏'}
                    {errors.Email?.type === 'pattern' && 'Invalid Email 👏'}
                  </p>
                )}
                <textarea
                  cols={4}
                  rows={6}
                  placeholder="➡  Message me,  I dont bite!  😊"
                  {...register('Message', {
                    required: true,
                    maxLength: 500,
                  })}
                  className={formInputStyles}
                />
                {errors.Message && (
                  <p className="mt-1 text-primary-500">
                    {errors.Message?.type === 'required' &&
                      'Kindly fill the required field'}
                    {errors.Message?.type === 'maxLength' &&
                      'Your message is too looooooong, Mom is this you? ❤'}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  SUBMIT
                </button>
              </form>

              {/* IMAGE */}
              <div className={` relative  mt-16  w-full md:mt-0 md:w-[40%]`}>
                <div
                  className={` before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext`}
                >
                  <img
                    style={{ width: '100%' }}
                    src={ContactUsPageGraphic}
                    alt="Contact Us image"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default index;
