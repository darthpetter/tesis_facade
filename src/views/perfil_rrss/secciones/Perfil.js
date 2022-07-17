import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Nucleo } from "../../../jwt/_services";
import { PerfilRRSS } from "../../../jwt/_services";

export const Perfil = (props) => {

    const initialState = {
        id_tipo_identificacion: 0,
        identificacion: '',
        nombres: '',
        apellidos: '',
        fecha_nacimiento: '',
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

    const notifyParentError=props.notifyError;

    const [perfil, setPerfil] = useState(initialState)
    const [errores, setErrores] = useState(initialState)
    const [sexos, setSexos] = useState([])
    const [tipos_identificacion, setTiposIdentificacion] = useState([])

    useEffect(() => {
        getListadoSexos()
        getListadoTiposID()
    }, [])

    const guardar_perfil = async () => {
        await PerfilRRSS.guardar_perfil(perfil)
            .then(data => {
                if(data.status===401){
                    setErrores({...data.errorList})
                    notifyParentError({...data.errorList});
                }else if(data.status===200){
                    Swal.fire(
                        'Registro Exitoso',
                        '',
                        'success'
                    )
                }
            })
    }

    const getListadoSexos = async () => {
        await Nucleo.getListadoSexos()
            .then(data => {
                setSexos(data);
            });
    }

    const getListadoTiposID = async () => {
        await Nucleo.getListadoTiposIdentificacion()
            .then(data => {
                setTiposIdentificacion(data.tipos_identificacion);
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
            <div className="p-4 border border-gray-300 rounded-md grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Tipo de Identificación</label>
                    <select
                        id="id_tipo_identificacion"
                        name="id_tipo_identificacion"
                        value={perfil.id_tipo_identificacion}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    >
                        <option key='0' id='0' value='0' disabled>-- SELECCIONE --</option>
                        {
                            tipos_identificacion.length &&
                            tipos_identificacion.map(it => (<option key={it.id} id={it.id} value={it.id}>{it.descripcion.toUpperCase()}</option>))
                        }
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Identificación</label>
                    <input
                        id="identificacion"
                        name="identificacion"
                        value={perfil.identificacion}
                        onChange={(e) => handlePerfil(e)}
                        type="text"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Nombres</label>
                    <input
                        id="nombres"
                        name="nombres"
                        value={perfil.nombres}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Apellidos</label>
                    <input
                        id="apellidos"
                        name="apellidos"
                        value={perfil.apellidos}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Fecha de Nacimiento</label>
                    <input
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        value={perfil.fecha_nacimiento}
                        onChange={(e) => handlePerfil(e)}
                        type="date"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Sexo</label>
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
                            sexos.map(it => (<option key={it.id} id={it.id} value={it.id}>{it.name.toUpperCase()}</option>))
                        }
                    </select>
                </div>

                <div className="col-span-2 grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Biografía</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={perfil.bio}
                        onChange={(e) => handlePerfil(e)}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    >
                    </textarea>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Dirección Domicilio</label>
                    <input
                        id="direccion_domicilio"
                        name="direccion_domicilio"
                        value={perfil.direccion_domicilio}
                        onChange={(e) => handlePerfil(e)}
                        type="text"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Dirección Trabajo</label>
                    <input
                        id="direccion_trabajo"
                        name="direccion_trabajo"
                        value={perfil.direccion_trabajo}
                        onChange={(e) => handlePerfil(e)}
                        type="text"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Telefono 1</label>
                    <input
                        id="telefono1"
                        name="telefono1"
                        value={perfil.telefono1}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Telefono 2</label>
                    <input
                        id="telefono2"
                        name="telefono2"
                        value={perfil.telefono2}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Celular 1</label>
                    <input
                        id="calular1"
                        name="calular1"
                        value={perfil.calular1}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <label
                        className="header-title text-base text-neutral-500"
                    >Celular 2</label>
                    <input
                        id="calular2"
                        name="calular2"
                        value={perfil.calular2}
                        onChange={(e) => handlePerfil(e)}
                        type="number"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                    />
                </div>
                
                <div className="col-span-2 flex items-center justify-end">
                    <button
                        id="btn_guardar-perfil"
                        onClick={(e) => guardar_perfil()}
                        className="py-2 px-4 bg-guayaquil-600 text-white rounded-md hover:bg-guayaquil-700 focus:bg-guayaquil-400"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>

    );
}
