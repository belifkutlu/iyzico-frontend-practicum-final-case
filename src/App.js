import { Route, Routes } from "react-router-dom";

import Starships from "./pages/Starships";
import StarshipDetail from "./pages/StarshipDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Starships />} />
        <Route path="/starship-detail" element={<StarshipDetail />} />
      </Routes>
    </div>
  );
}

export default App;
