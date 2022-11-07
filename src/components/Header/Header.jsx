import { AiOutlineSearch } from "react-icons/ai";
import NavItem from "./NavItem";

const Header = () => {
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "Services",
    },
    {
      label: "Contact",
    },
  ];
  return (
    <header className="bg-main min-h-[20px] py-4">
      <div className="layout-container flex justify-between items-center">
        <div className="w-[50px] bg-red">
          <p>logo</p>
        </div>
        <div className="flex gap-4 justify-between">
          {navItems.map((navItems) => (
            <NavItem label={navItems.label} />
          ))}
        </div>
        <div className="">
          <div>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
