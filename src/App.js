import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { FinalScreen } from "./components/FinalScreen";
import { Home } from './components/Home';
import { SelectScreen } from './components/SelectScreen';
import { Assemble } from "./components/DragScreen";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = { <Home />} />
          <Route exact path = "/SelectScreen" element = {< SelectScreen />}></Route>  
          <Route exact path = "/AssembleScreen" element = {< Assemble />}></Route> 
          <Route exact path = "/FinalScreen" element = {<FinalScreen />}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
