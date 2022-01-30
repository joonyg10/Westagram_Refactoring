import Story from "../../components/Story/Story";
import Sidebar from "../../components/SIdebar/Sidebar";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Story />
      <Sidebar />
      <div>Hello world</div>
    </main>
  );
}

export default Main;
