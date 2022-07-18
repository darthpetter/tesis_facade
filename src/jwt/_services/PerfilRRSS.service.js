import {BASE_URL} from './URL.service';
import { HandleResponse,AuthHeader } from "../_helpers";

export const PerfilRRSS={
    guardar_perfil,
    get_data_perfil,
    guardar_rrss,
    get_data_rrss,
}

function get_data_perfil() {
    const requestOptions={
        method: "GET",
        headers: AuthHeader(),
    }
    return fetch(
        `${BASE_URL()}api/perfil`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        return response;
    }).catch(error => {
        console.log("🚀 ~ file: PerfilRRSS.service.js ~ line 26 ~ .then ~ error", error)
    });
}

function guardar_perfil(data){
    const requestOptions={
        method: "POST",
        headers: AuthHeader(),
        body: JSON.stringify(data),
    }
    return fetch(
        `${BASE_URL()}api/perfil`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        console.log("🚀 ~ file: PerfilRSS.service.js ~ line 20 ~ .then ~ response", response)
        return response;
    }).catch(error => {
        console.log("🚀 ~ file: PerfilRRSS.service.js ~ line 26 ~ .then ~ error", error)
    });
}

function guardar_rrss(data){
    const requestOptions={
        method: "POST",
        headers: AuthHeader(),
        body: JSON.stringify(data),
    }
    return fetch(
        `${BASE_URL()}api/redessociales`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        console.log("🚀 ~ file: PerfilRSS.service.js ~ line 20 ~ .then ~ response", response)
        return response;
    }).catch(error => {
        console.log("🚀 ~ file: PerfilRRSS.service.js ~ line 26 ~ .then ~ error", error)
    });
}

function get_data_rrss() {
    const requestOptions={
        method: "GET",
        headers: AuthHeader(),
    }
    return fetch(
        `${BASE_URL()}api/redessociales`,
        requestOptions
    ).then(HandleResponse)
    .then((response) => {
        return response;
    }).catch(error => {
        console.log("🚀 ~ file: PerfilRRSS.service.js ~ line 26 ~ .then ~ error", error)
    });
}