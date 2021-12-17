
import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

const BASE_URL = "https://edgemony-backend.herokuapp.com";


const http = (resource) => fetch(BASE_URL + resource)
    .then(response => response.json());

const formatDateAgo = (data) => 
{
    return formatDistance(new Date(data), new Date(), {
        addSuffix: true,
        locale: it,
    });
}


export{ 
    http,
    formatDateAgo
};