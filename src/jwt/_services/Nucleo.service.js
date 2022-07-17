import {BASE_URL} from './URL.service';
import { HandleResponse } from "../_helpers";

export const Nucleo={
    getRolesLibres,
    getListadoSexos,
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
        console.log("🚀 ~ file: Nucleo.service.js ~ line 32 ~ .then ~ response", response)
        return response;
    });
}
