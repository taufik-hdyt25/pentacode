import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineShoppingBag } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <div className="h-[83px] border-b border-[#121212] border-t">
      <div className="h-full justify-between hidden md:flex ">
        <div className="flex h-full">
          <div className="w-[180px] border-r border-[#121212] flex justify-center items-center">
            Shop
          </div>
          <div className="w-[180px] border-r border-[#121212] flex justify-center items-center">
            Contact
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-[180px] border-l border-r border-[#121212] flex justify-center items-center">
            Sign in
          </div>
          <div className="w-[180px] border-r border-[#121212] flex justify-center items-center">
            Cart
          </div>
        </div>
      </div>

      <div className="flex h-full justify-between items-center md:hidden">
        <div className="w-[83px] h-full flex justify-center items-center border-r border-l border-black">
          <GiHamburgerMenu className="cursor-pointer" size={24} />
        </div>
        <div className="w-[83px] h-full flex justify-center items-center border-r border-l border-black">
          <MdOutlineShoppingBag className='cursor-pointer' size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
