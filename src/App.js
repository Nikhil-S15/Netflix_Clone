
import {originals, action, romantic,history,horror,mystery,western} from '../src/URLs'
import NavBar from './Components/NavBar/NavBar';

import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
     < NavBar/>
     < Banner />
     <RowPost url={originals} title='Netflix originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={romantic} title='Romatic' isSmall/>
     <RowPost url={history} title='History' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={mystery} title='Mystery' isSmall/>
     <RowPost url={western} title='Western' isSmall/>
    </div>
  );
}

export default App;
