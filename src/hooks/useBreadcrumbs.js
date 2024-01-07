import { useLocation } from 'react-router-dom';

function useBreadcrumbs() {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter((part) => part !== '');

    return pathParts;
}

export default useBreadcrumbs;
