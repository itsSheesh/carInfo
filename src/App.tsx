// ========== packages ========== \\
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ========== components & contexes ========== \\
import HomePage from "./page/Main";
import AppContext from "./context/AppContext";
import ModelContextProvider from "./context/ModelContext";
import DarkModeContextProvider from "./context/DarkModeContext";
import CarDetails from "./page/Details";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <AppContext>
          <ModelContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:carId" element={<CarDetails/>}/>
            </Routes>
          </ModelContextProvider>
        </AppContext>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
