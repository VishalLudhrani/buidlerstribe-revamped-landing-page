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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </span>
      </div>
      <ul className={`${navOpen ? "block" : "hidden"} sm:hidden sm:list-none container mx-auto px-8 pb-4 bg-dark text-light`}>
          <NavMenu list={NAVBAR_MENU} />
      </ul>
    </nav>
  );
};

export default Navbar;
