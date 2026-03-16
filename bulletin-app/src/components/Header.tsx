import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Church, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header glass">
            <div className="container header-container">
                <Link to="/" className="logo" onClick={handleLinkClick}>
                    <Church className="logo-icon" size={28} />
                    <h1>평화 성당 주일학교</h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        <li><Link to="/#hero">이번 주 주보</Link></li>
                        <li><Link to="/#past">지난 주보</Link></li>
                        <li><Link to="/#announcements">공지사항</Link></li>
                        <li><Link to="/#students">학생부 코너</Link></li>
                        <li><Link to="/board">나눔 게시판</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/#hero" onClick={handleLinkClick}>이번 주 주보</Link></li>
                        <li><Link to="/#past" onClick={handleLinkClick}>지난 주보</Link></li>
                        <li><Link to="/#announcements" onClick={handleLinkClick}>공지사항</Link></li>
                        <li><Link to="/#students" onClick={handleLinkClick}>학생부 코너</Link></li>
                        <li><Link to="/board" onClick={handleLinkClick}>나눔 게시판</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
