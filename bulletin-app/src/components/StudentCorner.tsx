import React, { useState } from 'react';
import { Sun, Star, Music, Edit2, Check, X } from 'lucide-react';
import { studentMessages as initialMessages } from '../data/dummyData';

const StudentCorner: React.FC = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [tempMessage, setTempMessage] = useState('');

    const getGroupIcon = (iconName: string, color: string) => {
        switch (iconName) {
            case 'Sun': return <Sun size={32} color={color} className="group-icon" />;
            case 'Star': return <Star size={32} color={color} className="group-icon" />;
            case 'Music': return <Music size={32} color={color} className="group-icon" />;
            default: return <Star size={32} color={color} className="group-icon" />;
        }
    };

    const startEditing = (id: string, currentMessage: string) => {
        setEditingId(id);
        setTempMessage(currentMessage);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setTempMessage('');
    };

    const saveMessage = (id: string) => {
        setMessages(messages.map(m =>
            m.id === id ? { ...m, message: tempMessage } : m
        ));
        setEditingId(null);
        setTempMessage('');
    };

    return (
        <section id="students" className="student-section custom-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">우리 친구들 안녕! 👋</h2>
                    <p className="section-subtitle">선생님들이 전하는 사랑의 메시지를 확인해요.</p>
                </div>

                <div className="student-grid">
                    {messages.map((item) => (
                        <div
                            key={item.id}
                            className={`student-card card hover-lift ${editingId === item.id ? 'editing' : ''}`}
                            style={{ borderTop: `6px solid ${item.color}` }}
                        >
                            <div
                                className="icon-wrapper"
                                style={{ backgroundColor: `${item.color}20` }}
                            >
                                {getGroupIcon(item.icon, item.color)}
                            </div>
                            <h3 className="group-title">{item.group}</h3>

                            {editingId === item.id ? (
                                <div className="edit-area">
                                    <textarea
                                        className="edit-input"
                                        value={tempMessage}
                                        onChange={(e) => setTempMessage(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="edit-actions">
                                        <button className="icon-btn save" onClick={() => saveMessage(item.id)}>
                                            <Check size={18} />
                                        </button>
                                        <button className="icon-btn cancel" onClick={cancelEditing}>
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className="group-message">"{item.message}"</p>
                                    <button
                                        className="btn-edit-float"
                                        onClick={() => startEditing(item.id, item.message)}
                                        title="메시지 수정"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentCorner;
