'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Contact cards animation
      gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          x: -60,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });

      // Form fields animation
      gsap.utils.toArray('.form-field').forEach((field, index) => {
        gsap.from(field as Element, {
          scrollTrigger: {
            trigger: field as Element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          x: 40,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out'
        });
      });

      // Submit button animation
      gsap.from('.submit-btn', {
        scrollTrigger: {
          trigger: '.submit-btn',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      });

      // Social icons animation
      gsap.utils.toArray('.social-icon').forEach((icon, index) => {
        gsap.from(icon as Element, {
          scrollTrigger: {
            trigger: icon as Element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          scale: 0.5,
          rotation: 180,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(2)'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-800" ref={sectionRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
        Ready for global challenges & top-class software engineering roles. Let&apos;s connect!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:sebastiandavis109@gmail.com"
                className="contact-card flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Email</p>
                  <p className="font-semibold text-gray-900 dark:text-white">sebastiandavis109@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919739570216"
                className="contact-card flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700 dark:to-green-900/20 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone className="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Phone</p>
                  <p className="font-semibold text-gray-900 dark:text-white">+91-9739570216</p>
                </div>
              </a>

              <a 
                href="https://github.com/davis109"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/20 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">GitHub</p>
                  <p className="font-semibold text-gray-900 dark:text-white">github.com/davis109</p>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/davis109" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all shadow-md"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all shadow-md"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                placeholder="Your Name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn w-full btn-primary flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
