import {
  AiFillHome,
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiOutlineCompass,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { ICONS } from "../../constant/NavbarIcons";

function Icon({ name }) {
  console.log(name);
  switch (name) {
    case ICONS.home:
      return <AiFillHome size={32} />;
    case ICONS.plane:
      return <FaRegPaperPlane size={32} />;
    case ICONS.plus:
      return <AiOutlinePlusSquare size={32} />;
    case ICONS.compass:
      return <AiOutlineCompass size={32} />;
    case ICONS.heart:
      return <AiOutlineHeart size={32} />;
    case "search":
      return <BiSearchAlt size={28} />;
    default:
      return <></>;
  }
}

export default Icon;
