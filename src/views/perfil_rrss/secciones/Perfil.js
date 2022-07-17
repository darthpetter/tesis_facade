import { useEffect, useState } from "react";
import { Nucleo } from "../../../jwt/_services";

export const Perfil = () => {

    const initialState = {
        nombres: '',
        apellidos: '',
        fecha_nacimiento:'',
        bio: '',
        escolaridad: '',
        direccion_domicilio: '',
        direccion_trabajo: '',
        telefono1: '',
        telefono2: '',
        celular1: '',
        celular2: '',
        id_sexo: 0,
    }

    const [perfil, setPerfil] = useState(initialState)
    const [sexos, setSexos] = useState([])

    useEffect(() => {
        getListadoSexos()
    }, [])

    const getListadoSexos = async () => {
        await Nucleo.getListadoSexos()
            .then(data => {
                setSexos(data);
            });
    }

    const handlePerfil = (e) => {
        setPerfil({
            ...perfil,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <h4 className="header-title text-2xl text-guayaquil-700 font-medium">Datos Personales</h4>
            </div>
            <div className="p-4 border border-gray-600 rounded-md grid grid-cols-2 gap-5">
                <div>
                    <label>Nombres</label>
                    <input
                        id="nombres"
                        name="nombres"
                        value={perfil.nombres}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Apellidos</label>
                    <input
                        id="apellidos"
                        name="apellidos"
                        value={perfil.apellidos}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Fecha de Nacimiento</label>
                    <input
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        value={perfil.fecha_nacimiento}
                        onChange={(e) => handlePerfil(e)}
                        type="date"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Sexo</label>
                    <select
                        id="id_sexo"
                        name="id_sexo"
                        value={perfil.id_sexo}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    >
                        <option key='0' id='0' value='0' disabled>-- SELECCIONE --</option>
                        {
                            sexos.length &&
                            sexos.map(it => (<option key={it.id} id={it.id} value={it.id_sexo}>{it.name.toUpperCase()}</option>))
                        }
                    </select>
                </div>
                <div className="col-span-2">
                    <label>Biografía</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={perfil.bio}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    >
                    </textarea>
                </div>
                <div>
                    <label>Dirección Domicilio</label>
                    <input
                        id="direccion_domicilio"
                        name="direccion_domicilio"
                        value={perfil.direccion_domicilio}
                        onChange={(e) => handlePerfil(e)}
                        type="text"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Dirección Trabajo</label>
                    <input
                        id="direccion_trabajo"
                        name="direccion_trabajo"
                        value={perfil.direccion_trabajo}
                        onChange={(e) => handlePerfil(e)}
                        type="text"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Telefono 1</label>
                    <input
                        id="telefono1"
                        name="telefono1"
                        value={perfil.telefono1}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Telefono 2</label>
                    <input
                        id="telefono2"
                        name="telefono2"
                        value={perfil.telefono2}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Celular 1</label>
                    <input
                        id="calular1"
                        name="calular1"
                        value={perfil.calular1}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                <div>
                    <label>Celular 2</label>
                    <input
                        id="calular2"
                        name="calular2"
                        value={perfil.calular2}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
            </div>
        </div>

    );
}
