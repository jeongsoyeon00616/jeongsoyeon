import React from 'react';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { calendarEvents } from '../data/dummyData';

const SimpleCalendar: React.FC = () => {
    return (
        <section id="calendar" className="calendar-section custom-padding">
            <div className="container">
                <div className="calendar-wrapper glass card">
                    <div className="calendar-header">
                        <CalendarIcon size={32} className="text-gold" />
                        <h2 className="section-title mb-0">이달의 주요 행사</h2>
                    </div>

                    <ul className="event-list">
                        {calendarEvents.map((event) => {
                            const [, month, day] = event.date.split('-');
                            return (
                                <li key={event.id} className="event-item hover-lift">
                                    <div className="event-date-box">
                                        <span className="month">{month}월</span>
                                        <span className="day">{day}</span>
                                    </div>
                                    <div className="event-info">
                                        <h4 className="event-title">{event.title}</h4>
                                        <p className="event-location">
                                            <MapPin size={14} className="inline-icon" /> 평화 성당
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SimpleCalendar;
