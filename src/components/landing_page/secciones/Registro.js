import React,{ useState,useEffect } from "react";
import { Roles } from "../../../jwt/_services";

const Registro=()=>{

    const initialState={
        name:'',
        email:'',
        password:'',
        id_rol:'',
    }

    const [user,setUser]= useState(initialState);

    const [errores,setErrores]= useState({error:false,...initialState});

    const [roles,setRoles]=useState([]);

   

    useEffect(()=>{

    },[])

    


    const handleInput=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        });
        setErrores({error:false,...initialState});
    }
    const register=async(e)=>{
        e.preventDefault();
        /*
        const response=await httpService.post('/register',{
            user:user
        });
        console.log("🚀 ~ file: Registro.js ~ line 26 ~ register ~ respons", response)
        if(response.data.status===200){
            console.log("exito");
        }else if(response.data.status===400){
            const errores=response.data;
            setErrores({error:true,...errores.messages});
            console.log("🚀 ~ file: Registro.js ~ line 26 ~ register ~ errores", errores)    
        }
        */
    }
    
    return(
        <div id="registro" className="min-h-screen w-full bg-wall-pattern flex items-center justify-center">
            <div className="bg-guayaquil-50 rounded-lg p-20 w-1/3 shadow-lg shadow-black/40">
                <div className="grid grid-cols-1 gap-5 justify-items-stretch">
                    <h2 className="header-title text-2xl font-medium text-center">Camella Ya</h2>
                    {
                        errores.error &&
                        <div className="bg-danger-500 p-2 rounded-md text-white grid grid-cols-1">
                            <span>{errores.name}</span>
                            <span>{errores.email}</span>
                            <span>{errores.id_rol}</span>
                        </div>
                    }
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            placeholder="Nombre de Usuario"
                            onChange={(e)=>handleInput(e)}
                            value={user.name}
                            />
                        </div>
                        <div>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            placeholder="Dirección de Correo Electrónico"
                            onChange={(e)=>handleInput(e)}
                            value={user.email}
                            />
                        </div>
                        <div>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            placeholder="Contraseña"
                            onChange={(e)=>handleInput(e)}
                            value={user.password}
                            />
                        </div>
                        <div>
                            <select
                            id="id_rol"
                            name="id_rol"
                            placeholder="¿Qué buscas?"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            onChange={(e)=>handleInput(e)}
                            >
                            {
                                roles.length &&
                                roles.map(it=>(<option key={it.id} value={it.id}>{it.name}</option>))
                            }
                            </select>
                        </div>
                    </div>
                    <button 
                    onClick={(e)=>register(e)}
                    className="header-title text-sm text-white bg-guayaquil-600 hover:bg-guayaquil-700 focus:bg-guayaquil-400 rounded-full px-4 py-2">Registrarse</button>
                </div>
            </div>
        </div>
    );
}


export default Registro;
