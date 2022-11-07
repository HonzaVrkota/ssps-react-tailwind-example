const NavItem = (props) => {
  return (
    <div className="px-4 py-2 bg-main-dark text-white hover:bg-slate-400 hover:text-black transition-all duration-150 cursor-pointer">
      {props.label}
    </div>
  );
};

export default NavItem;
