
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/contact" element = {<Contact/>}></Route>
            <Route path = "/dentist/:id" element = {<Detail/>}></Route>
            <Route path = "/favs" element = {<Favs/>}></Route>
            <Route path = "*" element = {<h1>Page Not Found</h1>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
