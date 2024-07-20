import Logo from '@/assets/Logo';
import LogoText from '@/assets/LogoText';
import SearchWidget from '@/components/Search/SearchWidget';

const Navbar = () => {
  return (
    <div className="navigation-bar flex p-3 items-center justify-between fixed w-full z-[100] bg-white border-b -border-b--linaria-theme_palette-bobo border-opacity-45">
      <div className="flex flex-grow justify-start">
        <div className="logo">
          <LogoText />
        </div>
      </div>
      <div className="search flex-grow-0">
        <SearchWidget expand={false} />
      </div>
      <div className="nav-items flex flex-grow justify-end">
        <ul>
          <li>Home</li>
          {/* implement globe for internationalisation menu */}
          {/* implement dropdown */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
