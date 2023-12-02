import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}