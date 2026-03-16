import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileImage, ExternalLink, ChevronDown } from 'lucide-react';
import { bulletins } from '../data/dummyData';

const PastBulletins: React.FC = () => {
    const [displayCount, setDisplayCount] = useState(4);

    // 첫 번째 항목(최신 주보)을 제외한 나머지 주보들을 날짜순으로 보여줍니다.
    const pastBulletins = bulletins.slice(1);
    const visibleBulletins = pastBulletins.slice(0, displayCount);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 4);
    };

    return (
        <section id="past" className="past-section custom-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">지난 주보 모아보기</h2>
                    <p className="section-subtitle">놓치신 주보가 있다면 여기서 다시 확인할 수 있어요.</p>
                </div>

                <div className="bulletin-grid">
                    {visibleBulletins.map((bulletin) => (
                        <Link
                            key={bulletin.id}
                            to={`/bulletin/${bulletin.id}`}
                            className="card bulletin-card hover-lift"
                            style={{ display: 'block' }}
                        >
                            <div className="card-image-box">
                                <img src={bulletin.imageUrl} alt={bulletin.title} loading="lazy" />
                                <div className="image-overlay">
                                    <span className="overlay-text">주보 자세히 보기</span>
                                    <div className="icon-group">
                                        <button className="icon-btn" title="이미지로 보기">
                                            <FileImage size={24} />
                                        </button>
                                        <button className="icon-btn" title="새 창에서 열기">
                                            <ExternalLink size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <span className="bulletin-date">{bulletin.date}</span>
                                <h3 className="bulletin-title">{bulletin.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {displayCount < pastBulletins.length && (
                    <div className="load-more-container">
                        <button className="btn btn-secondary load-more-btn" onClick={handleLoadMore}>
                            <ChevronDown size={20} />
                            더 보기
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PastBulletins;
