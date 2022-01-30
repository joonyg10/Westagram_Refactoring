import Story from "../../components/Story/Story";
import Sidebar from "../../components/SIdebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Story />
      <Sidebar />
      <Feed />
    </main>
  );
}

export default Main;
