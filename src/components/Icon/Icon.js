import {
  AiFillHome,
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiOutlineCompass,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRegPaperPlane, FaCog } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";
import { ALLICONS } from "../../constant/NavbarIcons";

function Icon({ name }) {
  console.log(name);
  switch (name) {
    case ALLICONS.home:
      return <AiFillHome size={32} />;
    case ALLICONS.plane:
      return <FaRegPaperPlane size={32} />;
    case ALLICONS.plus:
      return <AiOutlinePlusSquare size={32} />;
    case ALLICONS.compass:
      return <AiOutlineCompass size={32} />;
    case ALLICONS.heart:
      return <AiOutlineHeart size={32} />;
    case ALLICONS.search:
      return <BiSearchAlt size={28} />;
    case ALLICONS.user:
      return <AiOutlineUser size={24} />;
    case ALLICONS.BsBookmark:
      return <BsBookmark size={24} />;
    case ALLICONS.cog:
      return <FaCog size={24} />;
    case ALLICONS.change:
      return <MdOutlineChangeCircle size={24} />;

    default:
      return <></>;
  }
}

export default Icon;
