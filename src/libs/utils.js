
import { formatDistance } from 'date-fns';
import { it } from 'date-fns/locale';


const formatDateAgo = (data) => 
{
    return formatDistance(new Date(data), new Date(), {
        addSuffix: true,
        locale: it,
    });
}

export {
    formatDateAgo
};