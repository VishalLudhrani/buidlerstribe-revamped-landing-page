import { useState } from "react";
import { NAVBAR_MENU } from "../../../../data";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="container mx-auto xl:px-40">
      <div className={`${navOpen ? "text-light bg-dark" : "text-dark bg-light"} py-5 px-10 flex items-center justify-between`}>
        <a href="https://buidlerstribe.com" className="font-bold text-xl">Buidlers Tribe</a>
        <ul className="hidden sm:flex sm:list-none">
          <NavMenu list={NAVBAR_MENU} />
        </ul>
        <span onClick={() => {setNavOpen(prevState => {return !prevState})}} className="block sm:hidden">
          <i className="bi bi-list font-md"></i>
        </span>
      </div>
      <ul className={`${navOpen ? "block" : "hidden"} sm:hidden sm:list-none container mx-auto px-8 pb-4 bg-dark text-light`}>
          <NavMenu list={NAVBAR_MENU} />
      </ul>
    </nav>
  );
};

export default Navbar;
