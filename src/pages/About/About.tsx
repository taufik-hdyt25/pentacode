import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  about,
  cuterFlower,
  roomFlower1,
  roomFlower2,
} from '@/utils/static-images';
import { AiOutlinePinterest } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io5';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { RiTwitterLine } from 'react-icons/ri';

const AboutPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 h-[90vh]">
        <div className="p-20">
          <div className="text-[50px] flex justify-center flex-col text-center gap-5">
            <p className="text-[50px]">Our Story</p>
            <p className="font-zapfino text-sm">About</p>
            <p>Kyiv LuxeBouquets</p>
          </div>
          <p className="text-center mt-3">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>

          <div className="flex items-center justify-center mt-10  py-2 gap-5 w-full ">
            <div className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center">
              <IoLogoInstagram size={24} />
            </div>
            <div className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center">
              <AiOutlinePinterest size={24} />
            </div>
            <div className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center">
              <FiFacebook size={24} />
            </div>
            <div className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center">
              <RiTwitterLine size={24} />
            </div>
            <div className="w-[40px] h-[40px] border border-black rounded-full flex justify-center items-center">
              <PiTelegramLogoBold size={24} />
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <img className="object-cover w-full h-full" src={about} />
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center border-t border-black  text-center py-20">
        <p className="text-xs">OUR STORY</p>
        <p className="text-3xl font-bold">Our Founder's Passion </p>
        <p className="w-[50%]">
          Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
          goal of bringing unique and exquisite bouquets to the people of Kyiv.
          Natalia has always had a passion for flowers and design, and his
          vision was to create a local floral studio that would specialize in
          the creation and delivery of fresh, beautiful, and distinctive
          bouquets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black min-h-[100vh]">
        <div className="h-full">
          <img
            src={cuterFlower}
            className="max-h-[500px] w-full h-full"
            alt="cuter"
          />
        </div>
        <div className="p-20 ">
          <p className="text-[38px]">Expertly Crafted Bouquets</p>
          <p className="mt-3">
            At Kyiv LuxeBouquets, we take pride in our team of talented and
            experienced florists who carefully select each bloom, ensuring that
            only the freshest and most stunning flowers make it into our
            bouquets. We work directly with farms to source the highest quality
            flowers, and our skilled florists expertly craft each bouquet to
            perfection.
          </p>
        </div>

        <div className="p-20 ">
          <p className="text-[38px]">Bouquets, Gifts & Ambiance</p>
          <p className="mt-3">
            In addition to our stunning bouquets, we also offer a collection of
            dried bouquets, house plants, and fragrant candles from luxury
            brands to create the perfect ambiance. We believe that sending
            flowers, plants, and gifts should be easy and stress-free, which is
            why we offer same or next-day delivery throughout Kyiv.
          </p>
        </div>
        <div className="h-full ">
          <img
            src={roomFlower1}
            className="max-h-[500px] w-full h-full"
            alt="cuter"
          />
        </div>

        <div className="h-full ">
          <img
            src={roomFlower2}
            className="max-h-[500px] w-full h-full"
            alt="cuter"
          />
        </div>
        <div className="p-20 ">
          <p className="text-[38px]">Making Every Day Special</p>
          <p className="mt-3">
            Our mission is simple: to make every day special and memorable for
            our customers. We are dedicated to providing the highest quality
            flowers, exceptional customer service, and a seamless online
            experience that will make you feel confident and satisfied with your
            purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward
            to bringing joy and happiness to your life with our beautiful
            bouquets and gifts.
          </p>
        </div>
      </div>

      <div className="border-t border-black py-20">
        <div className='text-center'>
          <p className='text-[38px]'>Discover Our Beautiful Bouquets</p>
          <div className='flex justify-center'>
          <p className='mt-3 max-w-lg'>
            Explore our collection of exquisite bouquets and surprise your loved
            ones with the perfect gift. Click the button below to start shopping
          </p>
          </div>
          <Button className='mt-5 rounded-none px-10'>Shop Now</Button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
