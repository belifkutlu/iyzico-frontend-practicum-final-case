import { Route, Routes } from "react-router-dom";

import Starships from "./pages/Starships";
import StarshipDetail from "./pages/StarshipDetail";
import Introduction from "./pages/Introduction";
import { StarshipProvider } from "./contexts/starshipContext";

function App() {
  return (
    <div className="App">
      <StarshipProvider>
        <Routes>
          <Route path="/" element={<Starships />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/starship-detail" element={<StarshipDetail />} />
        </Routes>
      </StarshipProvider>
    </div>
  );
}

export default App;
