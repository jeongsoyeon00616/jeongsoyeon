import React from 'react';
import './BuryangPoster.css';

const BuryangPoster: React.FC = () => {
  return (
    <div className="poster-container" id="buryang-poster">
      {/* 1. 배경 및 2026 리본 (SVG) */}
      <div className="background-layer">
        <svg viewBox="0 0 1000 1414" className="ribbon-svg">
          {/* 2026을 형상화한 핑크색 리본 경로 (추후 정밀 조정) */}
          <path
            d="M150,400 C150,150 450,150 450,400 C450,650 150,650 150,900 C150,1150 450,1150 450,900"
            className="ribbon-path ribbon-2"
          />
          <path
            d="M550,200 C550,100 850,100 850,200 C850,300 550,300 550,400 C550,500 850,500 850,400"
            className="ribbon-path ribbon-0"
          />
          <path
             d="M100,200 Q300,50 500,200 T900,200 M100,500 Q300,750 500,500 T900,500 M100,800 Q300,1050 500,800 T900,800"
             className="ribbon-path decorative"
          />
          {/* 실제 2026 느낌을 주는 곡선들 */}
          <text x="50%" y="45%" className="bg-text-2026">2026</text>
        </svg>
      </div>

      {/* 2. 캐릭터 레이어 (절대 위치) */}
      <div className="characters-layer">
        {/* 중앙: 운동복 여주인공 + 조롱박 */}
        <div className="char center-woman">
          <div className="speech-bubble">
            <span className="hanja">雍</span>
            <span className="emoji">😊</span>
          </div>
          <div className="gourd-vase"></div>
          <div className="woman-illust"></div>
        </div>

        {/* 상단 좌측: 어두운 회색 축구공 */}
        <div className="item soccer-ball"></div>

        {/* 상단 우측: OTL 한량 (얼굴에 고깔, 레드/블루 카드) */}
        <div className="char hanlyang-otl">
          <div className="cone-on-face"></div>
          <div className="cards-floor">
            <div className="card red"></div>
            <div className="card blue"></div>
          </div>
        </div>

        {/* 하단 좌측: 지압신발 달리기남 */}
        <div className="char running-man">
          <div className="shiatsu-shoes"></div>
        </div>

        {/* 하단 우측: 곰돌이 (미션지, 오리발) */}
        <div className="char bear-mission">
          <div className="mission-paper">미션</div>
          <div className="flippers"></div>
        </div>

        {/* 중간 좌측: 2인 3각 (8자 매듭) */}
        <div className="char couple-race">
          <div className="figure-8-rope"></div>
        </div>
      </div>

      {/* 3. 하단 텍스트 레이아웃 */}
      <div className="bottom-content">
        <h1 className="main-title">부량 옹동회</h1>
        <div className="info-pills">
          <div className="pill">2026.4.25(토)</div>
          <div className="pill">13:30 ~ 18:00</div>
          <div className="pill">대현산배수지공원 다목적구장</div>
        </div>
      </div>
    </div>
  );
};

export default BuryangPoster;
