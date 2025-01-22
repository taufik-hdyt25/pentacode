import { google } from '@/utils/static-images';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Button } from '../ui/button';

const OurClient: React.FC = () => {
  return (
    <div className="flex items-center flex-col w-full">
      <img src={google} className="max-w-[77px]" alt="google" />
      <h1 className="font-bold text-3xl mt-5">Our Clients say</h1>

      <div className="flex justify-between  w-full mt-5">
        <MdArrowBackIos size={30} />
        <div>
          <Worditem />
        </div>
        <MdArrowForwardIos size={30} />
      </div>
      <Button variant={"outline"} className="rounded-none mt-10">READ REVIEWS</Button>
    </div>
  );
};

export default OurClient;

const Worditem = () => {
  return (
    <div>
      <p>
        “Ordered flowers online and they were the best bouquet! Impressed
        everyone around. Highly recommend this flower shop!”
      </p>
      <p className='text-xs text-center'>Ronald Richards</p>
    </div>
  );
};
