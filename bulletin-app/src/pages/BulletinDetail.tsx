import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Send } from 'lucide-react';
import { bulletins } from '../data/dummyData';

interface Comment {
    id: number;
    author: string;
    text: string;
    date: string;
}

const BulletinDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const bulletin = bulletins.find(b => b.id === id);

    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!bulletin) {
        return (
            <div className="container custom-padding center">
                <h2>주보를 찾을 수 없습니다.</h2>
                <button className="btn btn-primary" onClick={() => navigate('/')}>메인으로 돌아가기</button>
            </div>
        );
    }

    const handleLike = () => {
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
        setIsLiked(!isLiked);
    };

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Date.now(),
            author: '성당 가족',
            text: newComment,
            date: new Date().toLocaleDateString()
        };

        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <div className="bulletin-detail-page custom-padding">
            <div className="container">
                <button className="back-btn hover-lift" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    돌아가기
                </button>

                <div className="detail-card glass">
                    <div className="detail-image-box">
                        <img src={bulletin.imageUrl} alt={bulletin.title} />
                    </div>

                    <div className="detail-info">
                        <span className="detail-date">{bulletin.date}</span>
                        <h2 className="detail-title">{bulletin.title}</h2>
                        <p className="detail-description">{bulletin.description}</p>

                        <div className="engagement-summary">
                            <button
                                className={`like-btn ${isLiked ? 'active' : ''}`}
                                onClick={handleLike}
                            >
                                <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
                                <span>{likes}명이 좋아합니다</span>
                            </button>
                            <div className="comment-count">
                                <MessageCircle size={24} />
                                <span>댓글 {comments.length}개</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comment-section card">
                    <h3>나누고 싶은 이야기</h3>
                    <form className="comment-form" onSubmit={handleAddComment}>
                        <textarea
                            placeholder="따뜻한 한마디를 남겨주세요!"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary hover-lift">
                            <Send size={18} />
                            등록
                        </button>
                    </form>

                    <div className="comment-list">
                        {comments.length === 0 ? (
                            <p className="no-comments">아직 댓글이 없습니다. 첫 번째 댓글을 남겨보세요! ✨</p>
                        ) : (
                            comments.map(c => (
                                <div key={c.id} className="comment-item">
                                    <div className="comment-author">
                                        <span className="author-name">{c.author}</span>
                                        <span className="comment-date">{c.date}</span>
                                    </div>
                                    <p className="comment-text">{c.text}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BulletinDetail;
