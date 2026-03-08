import Navbar from "./componentes/Navbar"; 
 
 import Home from "./componentes/secciones/Home"; 
 import About from "./componentes/secciones/About"; 
 import Cursos from "./componentes/secciones/Cursos"; 
 
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
 
 const App = () => { 
   return ( 
     <Router> 
       <div className="overflow-x-hidden"> 
         <Navbar /> 
 
         <Routes> 
           <Route path="/" element={<Home />} /> 
           <Route path="/about" element={<About />} /> 
           <Route path="/cursos" element={<Cursos />} /> 
         </Routes> 
 
       </div> 
     </Router> 
   ); 
 }; 
 
 export default App; 
