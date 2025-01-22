import { hapines } from '@/utils/static-images';
import { Button } from '../ui/button';
import * as motion from 'motion/react-client';

const OurService: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl my-20 text-center">Our Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 border border-black">
        <div className="border-r border-black overflow-hidden">
          <motion.div
            initial={{ scale: 1.5 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-full"
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={hapines} alt="hapines" />
          </motion.div>
        </div>
        <div className="p-20 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0}}
            whileInView={{ y: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>SERVICE</p>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 50 }}
            whileInView={{ y: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-[50px] font-bold">Flower Subcriptions</h3>
            <p className="text-center">
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 50 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Button variant={'outline'} className="rounded-none mt-10">
              SUBSCRIBE NOW
            </Button>
          </motion.div>
        </div>
      </div>
      <div
        className="h-screen  bg-cover bg-center"
        style={{
          backgroundImage: 'url(assets/images/bg.png)',
        }}
      >
        <div className="text-center bg-black bg-opacity-50 rounded-lg p-8 h-full flex flex-col justify-center">
          <p className="text-white">SERVICE</p>
          <h3 className="text-[50px] font-bold text-white">
            Flower Subcriptions
          </h3>
          <p className="text-center text-white max-w-xl mx-auto">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <div className="flex justify-center">
            <Button variant={'outline'} className="rounded-none mt-10 w-fit">
              SUBSCRIBE NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
