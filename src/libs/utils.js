
import { formatDistance } from 'date-fns';
import { it } from 'date-fns/locale';


const formatDateAgo = (data) => 
{
    return formatDistance(new Date(data), new Date(), {
        addSuffix: true,
        locale: it,
    });
}

const greetings = (name = 'User') =>
{
    return `Hello dear ${name}`;
}

const doFetch = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());



export {
    formatDateAgo,
    greetings,
    doFetch
};