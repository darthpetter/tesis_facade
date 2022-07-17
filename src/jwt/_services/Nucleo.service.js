import {BASE_URL} from './URL.service';
import { HandleResponse } from "../_helpers";

export const Nucleo={
    getRolesLibres,
    getListadoSexos,
    getListadoTiposIdentificacion,
}

function getRolesLibres(){
    const requestOptions={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }
    return fetch(
        `${BASE_URL()}api/roles_libres`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        return response;
    });
}

function getListadoSexos(){
    const requestOptions={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }
    return fetch(
        `${BASE_URL()}api/lista_sexos`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        return response;
    });
}

function getListadoTiposIdentificacion(){
    const requestOptions={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }
    return fetch(
        `${BASE_URL()}api/lista_tipos_identificacion`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        return response;
    });
}
