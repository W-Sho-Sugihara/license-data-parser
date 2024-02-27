import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { ParsePage } from "./pages/parse";
import { Heading } from "./components/heading";

function App() {
  return (
    <main className="w-screen h-screen">
      <Heading />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/parse" element={<ParsePage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
