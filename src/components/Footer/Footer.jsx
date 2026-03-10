import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export const Footer = ({
    links = [
        { label: "Privacy Policy", href: "/privacy#privacy-policy" },
        { label: "Legal", href: "/legal#legal" },
        { label: "Copyright 2026", href: "/legal#copyright" }
    ],
    actionLink = { label: "Request Application Review", href: "/apply" }
}) => {
    const location = useLocation();

    const getLinkClass = (href) => {
        const pathname = href.split('#')[0];
        if (location.pathname === pathname) return 'footer-link footer-link--active';
        return 'footer-link';
    };

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-links-group">
                    {links.map((link, index) => (
                        <Link key={index} to={link.href} className={getLinkClass(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="footer-action">
                    <Link to={actionLink.href} className={getLinkClass(actionLink.href)}>
                        {actionLink.label}
                    </Link>
                </div>
            </div>
        </footer>
    );
};
