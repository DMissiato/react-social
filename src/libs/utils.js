
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

export {
    formatDateAgo,
    greetings
};