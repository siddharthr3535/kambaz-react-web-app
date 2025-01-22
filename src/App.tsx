import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Kambaz from "./Kambaz";
export default function App() {
 return (
  
  <HashRouter>
    <a href="https://github.com/siddharthr3535/kambaz-react-web-app">Siddharth's Github</a>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
    </Routes>
   </div>
  </HashRouter>
);}
