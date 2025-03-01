/*import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";

const tempoRoutes = import.meta.env.VITE_TEMPO === "true" ? [
  {path : "/tempo", element: <div>Tempo <Route></Route></div>}
] : [];

function App() {
  const dynamicRoutes = useRoutes(tempoRoutes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {dynamicRoutes}
      </>
    </Suspense>
  );
}

export default App; */

import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {import.meta.env.VITE_TEMPO === "true" && (
          <Route path="/tempo" element={<div>Tempo</div>} />
        )}
      </Routes>
    </Suspense>
  );
}

export default App;