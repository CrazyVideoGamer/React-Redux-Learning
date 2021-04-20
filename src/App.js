import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HooksCakeContainer />
      <CakeContainer />
    </div>
  );
}
