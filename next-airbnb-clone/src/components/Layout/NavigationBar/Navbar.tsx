import Logo from '@/assets/Logo';
import LogoText from '@/assets/LogoText';

const Navbar = () => {
  return (
    <div className="navigation-bar flex p-5 items-center justify-between">
      <div className="flex flex-grow justify-start">
        <div className="logo">
          <LogoText />
        </div>
      </div>
      <div className="search flex-grow-0">
        <input type="text" placeholder="Search" />
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
