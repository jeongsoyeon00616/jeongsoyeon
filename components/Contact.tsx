
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Contact Us</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
              당신의 특별한 일상을 <br />
              <span className="italic">함께 설계합니다.</span>
            </h3>
            <p className="text-gray-400 text-lg font-light mb-16 max-w-md leading-relaxed">
              하이엔드 주거 및 상업 공간 프로젝트를 위한 정교한 제안을 준비하겠습니다.
              정소연 디자이너만의 감각으로 당신의 가치를 증명하세요.
            </p>
            <div className="space-y-10">
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <svg className="w-5 h-5 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">Inquiry by Email</p>
                  <p className="text-xl font-light tracking-wide">soyeon@jeongsoyeon.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white/5 p-10 md:p-14 border border-white/10 rounded-sm">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Client Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-gold transition-colors font-light text-lg" placeholder="성함을 입력해주세요." />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Contact Info</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-gold transition-colors font-light text-lg" placeholder="연락처 혹은 이메일" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Project Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-gold transition-colors font-light text-lg resize-none" placeholder="공간의 위치, 규모, 원하시는 컨셉 등을 들려주세요."></textarea>
              </div>
              <div className="pt-6">
                <button className="group relative w-full py-5 bg-gold text-white font-bold uppercase tracking-[0.3em] text-xs overflow-hidden transition-all duration-500">
                  <span className="relative z-10">Request Consultation</span>
                  <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif tracking-tighter uppercase">
            SOYEON<span className="text-gold">.</span>JEONG
          </div>
          <p className="text-[11px] text-gray-600 uppercase tracking-widest">© 2024 STUDIO SOYEON Archive. All Rights Reserved.</p>
          <div className="flex gap-10">
            {['Instagram', 'Pinterest', 'Behance'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
