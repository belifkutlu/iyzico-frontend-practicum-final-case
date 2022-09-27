import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Starships from "./pages/Starships";
import StarshipDetail from "./pages/StarshipDetail";
import Introduction from "./pages/Introduction";
import { StarshipProvider } from "./contexts/starshipContext";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StarshipProvider>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship-detail" element={<StarshipDetail />} />
        </Routes>
      </StarshipProvider>
    </ThemeProvider>
  );
}

export default App;
