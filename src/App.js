import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import SkillList from "./SkillList";
import Intro from "./Intro";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
export default App;
