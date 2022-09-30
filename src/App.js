import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Starships from './pages/Starships';
import StarshipDetail from './pages/StarshipDetail';
import Introduction from './pages/Introduction';
import Page404 from './pages/Page404';

import { StarshipProvider } from './contexts/StarshipContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StarshipProvider>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship-detail" element={<StarshipDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </StarshipProvider>
    </ThemeProvider>
  );
}

export default App;
