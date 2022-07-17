import Home from './views/landing_page/Home';
import {LoginHome} from './views/login_home/LoginHome';
import {Perfil_RRSS} from './views/perfil_rrss/Perfil_RRSS';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginHome/>}/>
        <Route path="/perfil_rrss" element={<Perfil_RRSS/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
