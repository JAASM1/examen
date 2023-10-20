import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPlant from "./Componentes/ApiLisPlant";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ListPlant />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
