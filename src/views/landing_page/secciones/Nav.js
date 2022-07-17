const Nav=()=>{
    return(
        <div className="fixed w-full">
            <div className="grid grid-cols-2 header-title py-3 px-6 bg-white bg-opacity-40 backdrop-blur-sm m-2 rounded-md">
                <div>
                    <h1 className="text-guayaquil-600 text-3xl font-medium">Camellaya</h1>
                </div>
                <div className="grid grid-cols-3 place-items-center">
                    <a className="border border-guayaquil-600 px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:shadow-guayaquil-600/40" href="#welcome">Inicio</a>
                    <a className="border border-guayaquil-600 px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:shadow-guayaquil-600/40" href="#nosotros">Nosotros</a>
                    <a className="border border-guayaquil-600 px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:shadow-guayaquil-600/40" href="#registro">Registrarse</a>
                </div>
            </div>            
        </div>
    );
}

export default Nav;