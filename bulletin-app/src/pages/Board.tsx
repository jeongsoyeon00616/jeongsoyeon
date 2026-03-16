import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Send, User } from 'lucide-react';

interface Post {
    id: number;
    author: string;
    content: string;
    date: string;
    likes: number;
    isLiked: boolean;
}

const Board: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            author: '하늘천사',
            content: '이번 주 성경 학교 너무 즐거웠어요! 다음 주에도 친구들 많이 만났으면 좋겠어요.',
            date: '2026-03-14',
            likes: 12,
            isLiked: false
        },
        {
            id: 2,
            author: '베드로군',
            content: '주보가 너무 예뻐졌어요! 매주 들어와서 확인해야겠네요 ㅎㅎ',
            date: '2026-03-15',
            likes: 5,
            isLiked: false
        }
    ]);

    const [newAuthor, setNewAuthor] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newAuthor.trim() || !newContent.trim()) return;

        const newPost: Post = {
            id: Date.now(),
            author: newAuthor,
            content: newContent,
            date: new Date().toISOString().split('T')[0],
            likes: 0,
            isLiked: false
        };

        setPosts([newPost, ...posts]);
        setNewAuthor('');
        setNewContent('');
    };

    const handleLike = (id: number) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                    isLiked: !post.isLiked
                };
            }
            return post;
        }));
    };

    return (
        <div className="board-page custom-padding">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">학생 나눔 게시판</h2>
                    <p className="section-subtitle">우리들의 소소한 이야기와 기쁜 소식을 나누는 공간이에요. ✨</p>
                </div>

                {/* Post Form */}
                <div className="post-form-card card glass">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="author">
                                <User size={18} />
                                닉네임
                            </label>
                            <input
                                id="author"
                                type="text"
                                placeholder="예: 하늘천사, 베드로"
                                value={newAuthor}
                                onChange={(e) => setNewAuthor(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="content">
                                <MessageSquare size={18} />
                                내용
                            </label>
                            <textarea
                                id="content"
                                placeholder="나누고 싶은 이야기를 적어주세요!"
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 hover-lift">
                            <Send size={18} />
                            글 남기기
                        </button>
                    </form>
                </div>

                {/* Post List */}
                <div className="post-list">
                    {posts.map(post => (
                        <div key={post.id} className="post-item card hover-lift">
                            <div className="post-header">
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <User size={20} />
                                    </div>
                                    <span className="author-name">{post.author}</span>
                                </div>
                                <span className="post-date">{post.date}</span>
                            </div>
                            <div className="post-body">
                                <p>{post.content}</p>
                            </div>
                            <div className="post-footer">
                                <button
                                    className={`post-like-btn ${post.isLiked ? 'active' : ''}`}
                                    onClick={() => handleLike(post.id)}
                                >
                                    <Heart size={20} fill={post.isLiked ? 'currentColor' : 'none'} />
                                    <span>{post.likes}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
