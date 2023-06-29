import DefaultNavbar from './navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home'
import Nama from './pages/name'
import BiodataPannur from './pages/biodata1'
import BiodataIwan from './pages/biodata2'
import Contact from './pages/contact'
import './App.css';

function App() {
  return (
    <div>
     <DefaultNavbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/nama" element={<Nama />}/>
          <Route path="/Biodata1" element={<BiodataPannur />}/>
          <Route path="/Biodata2" element={<BiodataIwan />}/>
          <Route path="/Contact" element={<Contact />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
