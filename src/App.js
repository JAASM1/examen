import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPlant from "./Componentes/ApiLisPlant";
function App() {
  return (
    <BrowserRouter>
       <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/album/"></link>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
      <div>
        <Routes>
          <Route path="/" element={<ListPlant />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
