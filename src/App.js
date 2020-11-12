import './App.css';
import Player from './Player';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue } from './StateProvider'
import Login from './Login';
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      <Player />
      {/* {
        !user ? (<Login />) : (<Player />)
      } */}

    </div>
  );
}

export default App;
