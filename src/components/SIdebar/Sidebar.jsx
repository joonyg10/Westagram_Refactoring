import ProfileImg from "../ProfileImg/ProfileImg";
import Recommend from "./Recommend/Recommend";
import { SidebarData } from "./SidebarData.js";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="main__sidebar">
      <header>
        <ProfileImg imgUrl="./images/profile.jpg" />
        <div>
          <h3>Enna</h3>
          <p>Enna Jane</p>
        </div>
      </header>
      <ul className="recommends">
        {SidebarData.map((data) => (
          <Recommend key={data.id} data={data} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
