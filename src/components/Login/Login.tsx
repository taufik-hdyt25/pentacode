/* eslint-disable @typescript-eslint/no-explicit-any */

import { icApple, icGoogle } from '@/utils/static-images';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const Login: React.FC<IProps> = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-none border border-black shadow-lg w-full max-w-[40%] h-auto  px-20 pt-20 pb-10 relative">
        <div>
          <div className="mt-2 text-3xl font-bold">
            Greetings! Welcome to luxury gift shop.
          </div>
          <p className="text-xs mt-5">
            Use your mobile number to sign up or log in
          </p>
          <Input className="rounded-none mt-3" placeholder="Your Email" />
          <Button className="rounded-none mt-5 w-full">CONTINUE</Button>

          <div className="flex items-center text-xs gap-3 text-gray-300 my-7">
            <Separator className=" flex-1" /> or{' '}
            <Separator className="flex-1" />
          </div>

          <p className="text-xs">Instantly login or sign up via Google</p>
          <div className="flex gap-3">
            <Button variant={'outline'} className="rounded-none mt-5 w-full">
              <img src={icGoogle} />
              {'continue with google'.toUpperCase()}
            </Button>
            <Button variant={'outline'} className="rounded-none mt-5 w-full">
              <img src={icApple} />
              {'continue with apple'.toUpperCase()}
            </Button>
          </div>
        </div>

        <div className="flex h-5 items-center space-x-4 text-sm justify-center mt-20">
          <a href='#' className='underline'>Privacy Policy</a>
          <Separator orientation="vertical" />
          <a href='#'className='underline'>Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
