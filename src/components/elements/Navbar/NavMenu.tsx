import React from "react";

interface NavMenuProps {
  list: Array<{
    label: string;
    link: string;
  }>;
}

const NavMenu: React.FC<NavMenuProps> = ({ list }: NavMenuProps) => {
  return (
    <React.Fragment>
      {list.map((item, pos) => (
        <li key={pos}>
          <a href={item.link} className="mt-3 mx-3 text-md">
            {item.label}
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

export default NavMenu;
