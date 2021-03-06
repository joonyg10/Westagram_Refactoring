import {
  AiFillHome,
  AiOutlinePlusSquare,
  AiOutlineHeart,
  AiOutlineCompass,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaRegPaperPlane, FaCog } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdOutlineChangeCircle } from "react-icons/md";
import { ALLICONS } from "../../constant/NavbarIcons";

function Icon(props) {
  const { name } = props;
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
      return <AiOutlineUser size={28} />;
    case ALLICONS.bookmark:
      return <BsBookmark size={28} />;
    case ALLICONS.cog:
      return <FaCog size={28} />;
    case ALLICONS.change:
      return <MdOutlineChangeCircle size={28} />;
    case ALLICONS.dots:
      return <BsThreeDots size={28} />;
    case ALLICONS.leftArrow:
      return <IoIosArrowDropleftCircle {...props} />;
    case ALLICONS.rightArrow:
      return <IoIosArrowDroprightCircle {...props} />;
    default:
      return <></>;
  }
}

export default Icon;
