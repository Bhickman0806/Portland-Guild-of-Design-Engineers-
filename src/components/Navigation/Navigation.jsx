import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export const Navigation = ({
    links = [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Legal", href: "/legal" },
        { label: "Copyright 2026", href: "/legal" }
    ],
    actionLink = { label: "Request Application Review", href: "/apply" }
}) => {
    const location = useLocation();
    const isSubpage = location.pathname !== '/';

    if (isSubpage) {
        return (
            <nav className="navigation-section">
                <div className="navigation-content">
                    <Link to="/" className="navigation-link">
                        Home
                    </Link>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navigation-section">
            <div className="navigation-content">
                <div className="navigation-links-group">
                    {links.map((link, index) => (
                        <Link key={index} to={link.href} className="navigation-link">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="navigation-action">
                    <Link to={actionLink.href} className="navigation-link">
                        {actionLink.label}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
