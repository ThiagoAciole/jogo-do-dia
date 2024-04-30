import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/appLayout";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Team from "./pages/Team";
import Tournament from "./pages/Tournament";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="live" element={<Live />} />
            <Route path="team" element={<Team />} />
            <Route path="tournament" element={<Tournament />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
