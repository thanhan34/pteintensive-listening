import './App.css';
import Player from './Player';
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
