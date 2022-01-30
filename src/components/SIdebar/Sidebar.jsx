import ProfileImg from "../ProfileImg/ProfileImg";
import Recommend from "./Recommend/Recommend";
import { SidebarData } from "./SidebarData.js";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="main__sidebar">
      <section className="sidebar-box">
        <header>
          <ProfileImg imgUrl="./images/profile.jpg" />
          <div className="box">
            <h3>Enna</h3>
            <p>Enna Jane</p>
          </div>
        </header>
        <section className="sidebar__intro">
          <h2>회원님을 위한 추천</h2>
          <p className="show-all">모두 보기</p>
        </section>
        <ul className="recommends">
          {SidebarData.map((data) => (
            <Recommend key={data.id} data={data} />
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
