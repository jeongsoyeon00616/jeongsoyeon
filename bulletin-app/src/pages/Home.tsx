import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroBoard from '../components/HeroBoard';
import PastBulletins from '../components/PastBulletins';
import Announcements from '../components/Announcements';
import StudentCorner from '../components/StudentCorner';
import SimpleCalendar from '../components/SimpleCalendar';

const Home: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <HeroBoard />
            <PastBulletins />
            <Announcements />
            <StudentCorner />
            <SimpleCalendar />
        </>
    );
};

export default Home;
