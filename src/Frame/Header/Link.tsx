import { Link as RouterLink, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export default function Link({ children, to, ...props }: LinkProps) {
    
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <RouterLink className={ match ? 'active' : ''} to={to} {...props} >
            {children}
        </RouterLink>
    );
}