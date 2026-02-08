
import React from 'react';

import { DesignPersona } from '../types';

interface ContactProps {
  currentPersona: DesignPersona;
}

const Contact: React.FC<ContactProps> = ({ currentPersona }) => {
  const isBrutalist = currentPersona === DesignPersona.BRUTALIST;
  const isEditorial = currentPersona === DesignPersona.EDITORIAL;

  return (
    <footer id="contact" className={`pt-40 pb-20 transition-colors duration-1000 ${isBrutalist ? 'bg-zinc-950 text-white' : 'bg-charcoal text-white'
      }`}>
      <div className={`mx-auto px-10 transition-all duration-1000 ${isEditorial ? 'max-w-6xl' : 'max-w-7xl'}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 ${isEditorial ? 'flex-col' : ''}`}>
          <div className={isEditorial ? 'text-center max-w-2xl mx-auto' : ''}>
            <h2 className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-6 ${isBrutalist ? 'text-zinc-600' : 'text-gold'}`}>Contact Us</h2>
            <h3 className={`text-5xl md:text-7xl mb-12 leading-[0.95] transition-all duration-1000 ${isBrutalist ? 'font-sans font-black uppercase tracking-tighter' : 'font-serif'
              }`}>
              당신의 특별한 일상을 <br />
              <span className="italic opacity-70">함께 설계합니다.</span>
            </h3>
            <p className={`text-lg font-light mb-16 max-w-md leading-relaxed transition-colors ${isBrutalist ? 'text-zinc-500 font-sans' : 'text-gray-400'
              } ${isEditorial ? 'mx-auto' : ''}`}>
              {isBrutalist
                ? 'SYSTEM INQUIRY: DATA-DRIVEN ARCHITECTURE. WE DESIGN THE FUTURE.'
                : '하이엔드 주거 및 상업 공간 프로젝트를 위한 정교한 제안을 준비하겠습니다.'}
            </p>
            <div className={`space-y-10 ${isEditorial ? 'flex flex-col items-center' : ''}`}>
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className={`w-16 h-16 border flex items-center justify-center rounded-full transition-all duration-700 ${isBrutalist ? 'border-zinc-800 group-hover:bg-white group-hover:border-white' : 'border-white/10 group-hover:bg-gold group-hover:border-gold'
                  }`}>
                  <svg className={`w-5 h-5 transition-colors ${isBrutalist ? 'text-zinc-500 group-hover:text-black' : 'text-gold group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className={`text-[9px] uppercase tracking-[0.4em] mb-1 font-bold ${isBrutalist ? 'text-zinc-700' : 'text-gray-500'}`}>Official Email</p>
                  <p className={`text-2xl font-light tracking-wide ${isBrutalist ? 'font-sans' : ''}`}>soyeon@jeongsoyeon.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className={`p-10 md:p-14 border transition-all duration-1000 ${isBrutalist ? 'bg-zinc-900 border-zinc-800 rounded-none' : 'bg-white/5 border-white/10 rounded-sm'
            } ${isEditorial ? 'max-w-xl mx-auto w-full' : ''}`}>
            <div className={`space-y-12 ${isBrutalist ? 'font-sans' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className={`text-[9px] uppercase tracking-[0.3em] font-black ${isBrutalist ? 'text-zinc-600' : 'text-gold'}`}>Client Name</label>
                  <input type="text" className={`w-full bg-transparent border-b pb-4 focus:outline-none transition-colors font-light text-lg ${isBrutalist ? 'border-zinc-800 focus:border-white' : 'border-white/20 focus:border-gold'
                    }`} placeholder="성함" />
                </div>
                <div className="space-y-4">
                  <label className={`text-[9px] uppercase tracking-[0.3em] font-black ${isBrutalist ? 'text-zinc-600' : 'text-gold'}`}>Contact Info</label>
                  <input type="email" className={`w-full bg-transparent border-b pb-4 focus:outline-none transition-colors font-light text-lg ${isBrutalist ? 'border-zinc-800 focus:border-white' : 'border-white/20 focus:border-gold'
                    }`} placeholder="연락처" />
                </div>
              </div>
              <div className="space-y-4">
                <label className={`text-[9px] uppercase tracking-[0.3em] font-black ${isBrutalist ? 'text-zinc-600' : 'text-gold'}`}>Inquiry</label>
                <textarea rows={4} className={`w-full bg-transparent border-b pb-4 focus:outline-none transition-colors font-light text-lg resize-none ${isBrutalist ? 'border-zinc-800 focus:border-white' : 'border-white/20 focus:border-gold'
                  }`} placeholder="프로젝트 규모 및 컨셉"></textarea>
              </div>
              <div className="pt-8">
                <button className={`group relative w-full py-6 font-black uppercase tracking-[0.5em] text-[10px] overflow-hidden transition-all duration-700 ${isBrutalist ? 'bg-white text-black' : 'bg-gold text-white'
                  }`}>
                  <span className="relative z-10">Send Request</span>
                  <div className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ${isBrutalist ? 'bg-zinc-200' : 'bg-white/20'
                    }`}></div>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={`border-t pt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-white/5`}>
          <div className={`text-2xl tracking-tighter uppercase ${isBrutalist ? 'font-sans font-black italic' : 'font-serif'}`}>
            SOYEON<span className="text-gold">.</span>JEONG
          </div>
          <p className={`text-[10px] uppercase tracking-widest ${isBrutalist ? 'text-zinc-700' : 'text-gray-600'}`}>© 2026 ARCHIVE SYSTEM. All Rights Reserved.</p>
          <div className="flex gap-12">
            {['Instagram', 'Pinterest', 'Behance'].map(social => (
              <a key={social} href="#" className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${isBrutalist ? 'text-zinc-700 hover:text-white' : 'text-gray-500 hover:text-gold'
                }`}>{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
