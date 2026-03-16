import React from 'react';
import { Bell, Calendar, Users, Info } from 'lucide-react';
import { announcements } from '../data/dummyData';

const Announcements: React.FC = () => {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'important': return <Bell className="category-icon text-gold" size={24} />;
            case 'mass': return <Calendar className="category-icon text-sky" size={24} />;
            case 'youth': return <Users className="category-icon text-pink" size={24} />;
            default: return <Info className="category-icon text-muted" size={24} />;
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'important': return '중요 공지';
            case 'mass': return '미사 안내';
            case 'youth': return '학생부 소식';
            default: return '일반 안내';
        }
    };

    return (
        <section id="announcements" className="announcement-section custom-padding">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">알려드립니다!</h2>
                    <p className="section-subtitle">주일학교의 새로운 소식과 일정들을 확인해 보세요.</p>
                </div>

                <div className="announcement-list">
                    {announcements.map((item) => (
                        <div key={item.id} className="announcement-card card hover-lift glass">
                            <div className="card-header-icon">
                                {getCategoryIcon(item.category)}
                            </div>
                            <div className="announcement-content">
                                <div className="announcement-meta">
                                    <span className={`tag tag-${item.category}`}>{getCategoryLabel(item.category)}</span>
                                    <span className="date">{item.date}</span>
                                </div>
                                <h3 className="announcement-title">{item.title}</h3>
                                <p className="announcement-desc">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Announcements;
