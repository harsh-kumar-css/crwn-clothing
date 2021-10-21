import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => <div>HatsPage</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
