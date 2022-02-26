import { DROPDOWN_ICONS } from "../../constant/NavbarIcons";
import Icon from "../Icon/Icon";
import "./Dropdown.scss";

function DropDown({ isDropdownOpen }) {
  const scaleY = isDropdownOpen ? 1 : 0;

  return (
    <ul className="profile__dropdown" style={{ "--scaleY": `${scaleY}` }}>
      {Object.entries(DROPDOWN_ICONS).map(([name, description]) => (
        <li key={name} className="dropdown__list">
          <Icon name={name} />
          <p className="dropdown__description">{description}</p>
        </li>
      ))}
      <li className="dropdown__list">
        <p>로그아웃</p>
      </li>
    </ul>
  );
}

export default DropDown;
