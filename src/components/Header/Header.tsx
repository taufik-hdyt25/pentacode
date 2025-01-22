const Header: React.FC = () => {
  return (
    <div className="h-[83px] border-b border-[#121212] border-t">
      <div className="flex h-full justify-between">
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
    </div>
  );
};

export default Header;
