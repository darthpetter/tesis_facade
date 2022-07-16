import {BASE_URL} from './URL.service';


export const Roles={
    getRolesLibres,
}

const getRolesLibres=()=>{
    const requestOptions={
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }

    return fetch(
        `${BASE_URL()}api/roles_libres`,
        requestOptions
    ).then((response) => {
        return response;
    });
}
