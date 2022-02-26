import { useState } from "react";
import Icon from "../Icon/Icon";
import ProfileImg from "../ProfileImg/ProfileImg";
import DropDown from "../Dropdown/Dropdown";

import "./Navbar.scss";
import { ICONS } from "../../constant/NavbarIcons";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  function toggleDropdown() {
    isDropdownOpen ? closeDropdown() : openDropdown();

    function openDropdown() {
      setIsDropDownOpen(true);
    }
    function closeDropdown() {
      setIsDropDownOpen(false);
    }
  }

  return (
    <header className="navbar">
      <h2 className="logo">Westagram</h2>
      <section className="navbar__search">
        <Icon name="search" />

        <input
          placeholder="이름을 입력해주세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>
      <ul className="links">
        {Object.entries(ICONS).map(([_, name]) => (
          <Icon key={name} name={name} />
        ))}
        <ProfileImg
          imgUrl="./images/profile.jpg"
          size="sm"
          onClickHandler={toggleDropdown}
        />
        <DropDown isDropdownOpen={isDropdownOpen} />
      </ul>
    </header>
  );
}

export default Navbar;
