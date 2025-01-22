import { IoLogoInstagram } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AiOutlinePinterest } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";
import { PiTelegramLogoBold } from "react-icons/pi";


const Footer:React.FC = ()=> {


    return (
      <div className="grid grid-cols-4 border border-black ">
        <div className="border-r border-black p-[40px]">
          <p className="font-light mb-5">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>
          <Input className="rounded-none" placeholder="Your Email" />
          <Button className="rounded-none mt-5 w-full">REMIND</Button>
        </div>
        <div className="border-r border-black p-[40px]">
          <p className="text-[#808080] text-xl">Contact Us</p>
          <div className="mt-3">
            <div>
              <p className="text-[#808080]">Address</p>
              <p>15/4 Khreshchatyk Street, Kyiv </p>
            </div>
            <div className="mt-3">
              <p className="text-[#808080]">Phone</p>
              <p>+380980099777</p>
            </div>
            <div className="mt-3">
              <p className="text-[#808080]">General Enquiry:</p>
              <p>Kiev.Florist.Studio@gmail.com</p>
            </div>

            <p className="text-[#808080] text-xl mt-5">Follow Us</p>
            <div className="flex items-center mt-3  py-2 gap-5">
              <IoLogoInstagram />
              <AiOutlinePinterest />
              <FiFacebook />
              <RiTwitterLine />
              <PiTelegramLogoBold />
            </div>
          </div>
        </div>
        <div className="border-r border-black p-[40px]">
          <p className="text-[#808080] text-xl">Shop</p>
          <ul className="mt-5 flex flex-col gap-2">
            <li>All Products</li>
            <li>Fresh Flowers</li>
            <li>Dried Flowers</li>
            <li>Live Plants</li>
            <li>Designer Vases</li>
            <li>Aroma Candles</li>
            <li>Freshener Diffuser</li>
          </ul>
          <p className="text-[#808080] text-xl mt-5">Service</p>
          <ul className="flex flex-col gap-2 mt-3">
            <li>Flower Subcription</li>
            <li>Wedding & Event Decor</li>
          </ul>
        </div>
        <div className="border-r border-black p-[40px]">
          <p className="text-[#808080] text-xl">About Us</p>

          <div className="mt-3">
            <p>Our story</p>
            <p>Blog</p>
          </div>
          <div className="mt-3">
            <p>Shipping & returns</p>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    );
}

export default Footer