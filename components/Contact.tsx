import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 bg-off-white transition-colors duration-1000">
      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gold">
            Get in Touch
          </h2>
          <p className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
            Start Your Journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative">
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-gold transition-colors text-[#1a1a1a] placeholder-transparent peer"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                id="name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold"
              >
                NAME
              </label>
            </div>
            <div className="group relative">
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-gold transition-colors text-[#1a1a1a] placeholder-transparent peer"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold"
              >
                EMAIL
              </label>
            </div>
          </div>

          <div className="group relative">
            <textarea
              className="w-full bg-transparent border-b border-gray-200 py-4 text-lg focus:outline-none focus:border-gold transition-colors text-[#1a1a1a] placeholder-transparent peer min-h-[100px] resize-none"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              id="message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-4 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold"
            >
              MESSAGE
            </label>
          </div>

          <div className="text-center pt-10">
            <button
              type="submit"
              className="px-12 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:border-gold hover:text-white transition-all duration-500"
            >
              Submit Inquiry
            </button>
          </div>
        </form>

        <div className="mt-32 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
          <div>© 2025 Studio Soyeon. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold transition-colors">Behance</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
