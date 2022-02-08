import { Redirect, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import Welcome from "./pages/Welcome";


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
