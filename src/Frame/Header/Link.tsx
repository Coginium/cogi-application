import { Link as RouterLink, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import './Link.css';

export default function Link({ children, to, ...props }: LinkProps) {
    
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const css = [ 'frame-header-link' ];
    if (match) css.push('active');

    return (
        <RouterLink className={ css.join(' ')} to={to} {...props} >
            {children}
        </RouterLink>
    );
}