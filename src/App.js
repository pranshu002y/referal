import Referal from './Referal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Status from './Status';
import Calender from './Calender';
import Setting from './Setting';
import Sidebar from './Sidebar';
import Projects from './Projects';
import Team from './Team';
const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Referal />} />
        <Route path="/dashboard" element={<Referal />} />
        <Route path='/about' element={<div style={{ display: "flex" }}><Sidebar/><Status /> </div>}/>
        <Route path='/gallery' element={<div style={{ display: "flex" }}><Sidebar /> <Calender /> </div>}/>
        <Route path='/setting' element={<div style={{ display: "flex" }}><Sidebar /> <Setting /> </div>}/>
        <Route path='/projects' element={<div style={{ display: "flex" }}><Sidebar /> <Projects /> </div>}/>
        <Route path='/team' element={<div style={{ display: "flex" }}> <Team /> </div>}/>

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
