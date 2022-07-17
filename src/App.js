import Home from './views/landing_page/Home';
import { LoginHome } from './views/login_home/LoginHome';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginHome/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
