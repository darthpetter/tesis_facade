import { data } from "autoprefixer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationService } from "../../jwt/_services/Authentication.service";

export const LoginHome = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [error,setError]= useState({})

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const login=(e)=>{
        e.preventDefault()
        AuthenticationService.login(user).then(data=>{
            if(data.status===401){
                setError({...data});
                console.log(error);
            }
        });
    }


    return (
        <div className="min-w-screen min-h-screen bg-guayaquil-600 flex items-center justify-center">
            <div className="bg-white w-3/4 lg:w-1/4 rounded-md p-4 shadow-lg">
                <div className="grid grid-cols-1 gap-4">
                    <div className="border border-gray-400 rounded-md p-3">
                        <h5 className="header-title text-guayaquil-500 text-2xl font-medium">Bienvenido</h5>
                    </div>
                    {
                        error.message &&
                        <div className="bg-danger-500 p-2 rounded-md text-white grid grid-cols-1">
                            <span>{error.message}</span>
                        </div>
                    }
                    <div className="grid grid-cols-1 gap-2">
                        <div>
                            <input
                                id="email"
                                name="email"
                                placeholder="Correo Electrónico"
                                value={user.email}
                                onChange={(e) => handleInput(e)}
                                className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border  border-gray-400 rounded-md"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                placeholder="Contraseña"
                                value={user.password}
                                onChange={(e) => handleInput(e)}
                                className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <Link 
                            className="hover:text-guayaquil-600 mr-3"
                            to="/"
                        >
                            ¿Ya estás registrado?
                        </Link>
                        <button 
                            id="btn_login"
                            type="button"
                            onClick={(e)=>login(e)}
                            className="py-2 px-4 bg-guayaquil-500 text-white header-title rounded-md shadow-md hover:bg-guayaquil-600"
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}