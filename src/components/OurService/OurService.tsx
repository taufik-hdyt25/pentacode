import { hapines } from '@/utils/static-images';
import { Button } from '../ui/button';

const OurService: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl my-20 text-center">Our Service</h1>
      <div className="grid grid-cols-2 border border-black">
        <div className="border-r border-black">
          <img src={hapines} alt="hapines" />
        </div>
        <div className="p-20 flex flex-col justify-center items-center">
          <p>SERVICE</p>
          <h3 className="text-[50px] font-bold">Flower Subcriptions</h3>
          <p className="text-center">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <Button variant={'outline'} className="rounded-none mt-10">
            SUBSCRIBE NOW
          </Button>
        </div>
      </div>
      <div
        className="h-screen  bg-cover bg-center"
        style={{
          backgroundImage: 'url(assets/images/bg.png)', // Menggunakan gambar sebagai background
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
