import Image from 'next/image';

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image src="/svg/menu.svg" width={20} height={20} alt="Menu" />
          <a href="/">
            <Image src="/lws-logo-black.svg" width={100} height={40} alt="Learn with Sumit" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image src="/svg/avatar.svg" width={18} height={18} className="hidden lg:block" alt="Login Account Avatar" />
        <Image src="/svg/shopping-Cart.svg" width={20} height={20} className="block" alt="Shopping Cart Icon" />
      </div>
    </nav>
  );
};

export default Header;
