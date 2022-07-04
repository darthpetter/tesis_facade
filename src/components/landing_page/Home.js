import Nav from './secciones/Nav';
import Welcome from './secciones/Welcome';
import Nosotros from './secciones/Nosotros';
import Registro from './secciones/Registro';

export default function Home(){
    return (
        <div className="min-w-screen">
            <Nav/>
            <Welcome/>
            <Nosotros/>
            <Registro/>
        </div>
    );
}