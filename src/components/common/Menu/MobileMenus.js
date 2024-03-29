import React, { useState } from "react";

// internal
import menu_data from "./MobileData";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
         
            {menu.hasDropdown && (
              <li className="has-dropdown">
                <a href={menu.link}>{menu.title}</a>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.submenus.map((sub, i) => (
                    <li key={i}>
                      <a href={sub.link}>{sub.title}</a>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${
                    navTitle === menu.title ? "mean-clicked" : ""
                  }`}
                  to="#"
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            )}
               {!menu.hasDropdown &&<li>
              <a href={menu.link}>{menu.title}</a>
            </li>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
