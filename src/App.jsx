import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Alertas from './pages/Alertas';
import CentrosDeAyuda from './pages/CentrosDeAyuda';
import Comunidades from './pages/Comunidades';
import ContactosClave from './pages/ContactosClave';
import Geolocalizacion from './pages/Geolocalizacion';
import Home from './pages/Home';
import InformacionDeSeguridad from './pages/InformacionDeSeguridad';
import Tutorial from './pages/Tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alerts" element={<Alertas />} />
        <Route path="/centros-de-ayuda" element={<CentrosDeAyuda />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/contactos-clave" element={<ContactosClave />} />
        <Route path="/geolocalizacion" element={<Geolocalizacion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/informacion-de-seguridad" element={<InformacionDeSeguridad />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
