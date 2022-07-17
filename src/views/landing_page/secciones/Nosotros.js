import Guayas from '../../assets/Guayas';

const Nosotros = () => {
    return (
        <div id="nosotros" className="min-h-screen w-full bg-guayaquil-400 pt-16">
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <div className="header-title text-white font-normal text-lg">
                        <p>Conectando Guayaquil</p>
                        <p>Salvando distancias</p>
                        <p>Creando Oportunidades</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Guayas/>
                </div>
            </div>
        </div>
    );
}
export default Nosotros;
