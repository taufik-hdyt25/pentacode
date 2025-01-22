import { Layout } from '@/components/Layout';
import OurClient from '@/components/OurClient/OurClient';
import OurService from '@/components/OurService/OurService';
import { ChooseItem } from '@/components/WhyChoose';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WHYCHOOSE } from '@/utils/constants';
import {
  aromaCandels,
  driedFlowers,
  freshFlower,
  fresheners,
  imgHero,
  livePlants,
  shopName,
} from '@/utils/static-images';
import { AiOutlinePinterest } from 'react-icons/ai';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5';
import { MdOutlineCall } from 'react-icons/md';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { RiTwitterLine } from 'react-icons/ri';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-1 h-full md:grid-cols-2">
          <div className="gird grid-cols-1">
            <div className="h-[360px] px-[80px] pt-[80px] ">
              <div className="border-b border-black h-full">
                <h1 className="text-[67px] mb-2">
                  Kyiv
                  <div className="flex items-start">
                    LuxeBouquets <span className="text-[50px]">&reg;</span>
                  </div>
                </h1>
                <p className="font-light text-[16px]">
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:{' '}
                  <br />
                  Spread Joy with Our{' '}
                  <span className="italic">Online Flower Delivery Service</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 pb-[80px] px-[80px] pt-[24px]">
              <div className="border-r border-black pr-[24px]">
                <img
                  width={'256px'}
                  height={'256px'}
                  style={{ objectFit: 'contain' }}
                  src={imgHero}
                />
              </div>
              <div className="pl-[24px] h-full">
                <p className="text-[14px] font-light flex items-end h-full">
                  Experience the joy of giving with our modern floral studio.
                  Order online and send fresh flowers, plants and gifts today.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t md:border-t-muted  border-black overflow-y-auto h-screen">
            {/* col 1 */}
            <div className="border-r border-l border-black  min-h-[360px]">
              <div className="flex  flex-col items-center h-full justify-between">
                <div className="h-full flex items-center text-[38px]">
                  Fresh Flowers
                </div>
                <span className="mb-8 flex items-center gap-2">
                  Shop now <FaArrowRightLong />
                </span>
              </div>
            </div>
            <div className="min-h-[360px] border-r border-black">
              <img
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'contain' }}
                src={freshFlower}
              />
            </div>

            {/* col 2 */}

            <div className=" min-h-[360px] border-t border-black border-l ">
              <img
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'contain' }}
                src={driedFlowers}
              />
            </div>
            <div className="border-l border-black min-h-[360px] border-t border-b border-r">
              <div className="flex  flex-col items-center h-full justify-between">
                <div className="h-full flex items-center text-[38px]">
                  Dried Flowers
                </div>
                <span className="mb-8 flex items-center gap-2 ">
                  <FaArrowLeftLong /> Shop now
                </span>
              </div>
            </div>

            {/* col 3 */}

            <div className="border-l border-black min-h-[360px] border-t  border-b">
              <div className="flex  flex-col items-center h-full justify-between">
                <div className="h-full flex items-center text-[38px]">
                  Live Plants
                </div>
                <span className="mb-8 flex items-center gap-2 ">
                  Shop now <FaArrowRightLong />
                </span>
              </div>
            </div>
            <div className=" min-h-[360px] max-h-[360px] border-black border-l border-b border-r">
              <img className="object-cover h-full w-full" src={livePlants} />
            </div>

            {/* col 4 */}
            <div className=" min-h-[360px] max-h-[360px] border-black border-l border-b">
              <img className="object-cover h-full w-full" src={aromaCandels} />
            </div>
            <div className="border-l border-black min-h-[360px]  border-b border-r">
              <div className="flex  flex-col items-center h-full justify-between">
                <div className="h-full flex items-center text-[38px]">
                  Aroma Candels
                </div>
                <span className="mb-8 flex items-center gap-2 ">
                  <FaArrowLeftLong /> Shop now
                </span>
              </div>
            </div>

            {/* col 5 */}

            <div className="border-l border-black min-h-[360px] ">
              <div className="flex  flex-col items-center h-full justify-between">
                <div className="h-full flex items-center text-[38px]">
                  Fresheners
                </div>
                <span className="mb-8 flex items-center gap-2 ">
                  Shop now <FaArrowRightLong />
                </span>
              </div>
            </div>

            <div className=" min-h-[360px] max-h-[360px] border-black border-l  border-r">
              <img className="object-cover h-full w-full" src={fresheners} />
            </div>

            {/* end */}
          </div>

          {/*  ABOUT */}
          <div className="px-[80px] border-t border-black py-[80px] text-[50px]">
            About
          </div>
          <div className="border border-black  p-[80px]">
            <p className="text-[14px] font-extralight">OUR STORY</p>
            <p className="text-[38px] mt-5">Kyiv LuxeBouquets</p>
            <p className="font-light mt-3">
              We are a modern local floral studio, which specializes in the
              design and delivery of unique bouquets. We have the best florists
              who carefully select each look, our studio cooperates directly
              with farms for growing different flowers, so we always have fresh
              flowers, which are collected by our florists in exquisite
              bouquets. We have a collection of fresh bouquets, collections of
              dried bouquets, house plants, as well as fragrant candles from
              luxury brands to create the perfect atmosphere. Make someone's day
              amazing by sending flowers, plants and gifts the same or next day.
              Ordering flowers online has never been easier.
            </p>

            <Button
              variant={'outline'}
              className="mt-10 font-extralight px-8 rounded-none border-black"
            >
              LEARN MORE
            </Button>
          </div>
          {/* END ABOUT */}

          {/*  WHY CHOOSE */}
          <div className="px-[80px] border-t border-black py-[80px] text-[50px]">
            Why choose us ?
          </div>
          <div className="border border-black border-t-muted border-b-muted h-screen overflow-y-auto ">
            {WHYCHOOSE.map((val, idx) => (
              <div key={idx} className={`p-[80px] border-b border-black`}>
                <ChooseItem title={val?.title} description={val?.description} />
              </div>
            ))}
          </div>
          {/* END WHY CHOOSE */}

          {/*  CONTACT US */}
          <div className=" border-t border-black pt-[80px] border-b">
            <div className="px-[80px]">
              <h1 className=" text-[50px]">To Contact Us</h1>
              <p className="font-extralight">We will call you back</p>
              <div className="flex gap-5 mt-3">
                <Input
                  className="rounded-none"
                  placeholder="+380 XX XXX XX XX"
                />
                <Button className="rounded-none px-20">BOOK A CALL</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 mt-20 border-r-muted">
              <div className="border border-black h-[78px] flex items-center justify-center">
                Phone
              </div>
              <div className="border border-black border-l-muted border-r-muted  h-[78px] flex items-center justify-center">
                Address
              </div>
              <div className="border-r border-black  flex flex-col justify-center items-center gap-3 ">
                <div className="flex items-center gap-1  font-semibold">
                  <MdOutlineCall /> <span>+380980099777</span>
                </div>
                <div className="flex items-center gap-1  font-semibold">
                  <MdOutlineCall /> <span>+380980099777</span>
                </div>
              </div>
              <div className="border-black flex justify-center items-center h-[50vh]">
                <div className="flex items-center flex-col gap-3">
                  <span className="text-[14px]">
                    OPENING HOURS: 8 to 11 P.M.
                  </span>
                  <p className="font-semibold flex gap-2 items-center">
                    {' '}
                    <IoLocationOutline />
                    15/4 Khreshchatyk Street, Kyiv{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-black flex flex-col justify-between">
            <img src={shopName} alt="shop" className="flex-1" />
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-center py-2 border-r border-black">
                Follow us
              </div>
              <div className="flex items-center justify-center py-2 gap-5">
                <IoLogoInstagram />
                <AiOutlinePinterest />
                <FiFacebook />
                <RiTwitterLine />
                <PiTelegramLogoBold />
              </div>
            </div>
          </div>
          {/* END CONTACT US */}
        </div>

        <OurService />

        <div className="flex justify-center py-20 px-32">
          <OurClient />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
