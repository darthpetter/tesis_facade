import {BASE_URL} from './URL.service';
import { HandleResponse } from "../_helpers";

export const Roles={
    getRolesLibres,
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
