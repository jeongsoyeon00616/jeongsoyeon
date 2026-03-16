import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3>평화 성당 주일학교</h3>
                    <p>서울시 맑은구 평화동 123-45</p>
                    <p>주일학교 문의: 02-1234-5678</p>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; 2026 평화 당 주일학교. All rights reserved.
                        Made with <Heart size={14} className="text-pink inline-icon" fill="currentColor" /> for kids.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
