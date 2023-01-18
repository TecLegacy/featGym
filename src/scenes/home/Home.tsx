import { SelectedPage } from '@/shared/types';
import gymText from '@/asset/FeatGymText.svg';

interface Props {
  setSelectedPage: (value: SelectedPage.ContactUs) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section>
        {/* Left Side */}
        <div className={` flex items-center  justify-between `}>
          <div>
            {/* FeatGym Text */}
            <div>
              <img src={gymText} alt="Home-section-image" />
            </div>
            {/* Motivation */}
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                nemo atque deserunt expedita voluptatibus fuga asperiores
                aliquid officiis unde nulla iusto nesciunt, enim debitis tempora
                facere consectetur. A, asperiores officiis.
              </p>
            </div>
            {/* Join us */}
            <div>
              <button>Join Now</button>
              <button>Learn More</button>
            </div>
          </div>
          {/* Right side */}
          <div>
            {/* Fitness image */}
            <img src="" alt="fitness-girl-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
