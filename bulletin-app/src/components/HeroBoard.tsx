import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';
import { bulletins } from '../data/dummyData';

const HeroBoard: React.FC = () => {
    const navigate = useNavigate();
    // 최신 주보 데이터 (항상 배열의 첫 번째 항목)
    const latestBulletin = bulletins[0];

    return (
        <section id="hero" className="hero-section custom-padding">
            <div className="container">
                <div className="hero-grid">
                    {/* 텍스트 설명 영역 */}
                    <div className="hero-text-area">
                        <div className="badge glass">이번 주 주보</div>
                        <h2 className="hero-title">{latestBulletin.title}</h2>
                        <p className="hero-date">{latestBulletin.date} 발행</p>
                        <p className="hero-desc">{latestBulletin.description}</p>

                        <div className="hero-actions">
                            <button
                                className="btn btn-primary hover-lift"
                                onClick={() => navigate(`/bulletin/${latestBulletin.id}`)}
                            >
                                <FileText size={20} />
                                이번 주 주보 보기
                            </button>
                            <button className="btn btn-secondary hover-lift">
                                <Download size={20} />
                                PDF 다운로드
                            </button>
                        </div>
                    </div>

                    {/* 대표 주보 이미지 미리보기 영역 */}
                    <div className="hero-image-area hover-lift" onClick={() => navigate(`/bulletin/${latestBulletin.id}`)}>
                        <div className="image-wrapper glass">
                            <img
                                src={latestBulletin.imageUrl}
                                alt={`${latestBulletin.title} 주보 표지`}
                                loading="lazy"
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBoard;
