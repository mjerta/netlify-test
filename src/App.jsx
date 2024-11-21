import './App.css'
import {Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";

function App() {

  return (
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </>
  )
}

export default App
