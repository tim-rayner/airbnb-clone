import Logo from '@/assets/Logo';
import LogoText from '@/assets/LogoText';
import Button from '@/components/Button';
import SearchWidget from '@/components/Search/SearchWidget';
import ProfileDropdown from './Dropdown';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navigation-bar md:flex p-3 items-center justify-between fixed w-full z-[100] bg-white border-b -border-b--linaria-theme_palette-bobo border-opacity-45 ">
      <Link href="/" className="flex flex-grow justify-start">
        <div className="logo hidden lg:block">
          <LogoText />
        </div>
        <div className="logo-sm hidden md:flex lg:hidden">
          <Logo />
        </div>
      </Link>
      <div className="search flex-grow-0">
        <SearchWidget expand={false} />
      </div>
      <div className="nav-items flex-grow justify-end hidden md:flex">
        <ul
          style={{ display: 'flex', padding: 0, listStyleType: 'none' }}
          className="items-center"
        >
          <li>
            <Button style="secondary" label="Airbnb your home" rounded="full" />
          </li>
          <li>
            <Button
              style="secondary"
              rounded="full"
              iconOnly={true}
              icon="pi pi-globe"
            />
          </li>
          <ProfileDropdown />
          {/* implement dropdown */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
