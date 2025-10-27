import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Davis Sebastian</h3>
            <p className="text-gray-400">
              Full Stack Software Engineer passionate about building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/davis109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:sebastiandavis109@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <strong>Email:</strong> sebastiandavis109@gmail.com<br />
              <strong>Phone:</strong> +91-9739570216
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Davis Sebastian. Made with <FaHeart className="text-red-500" /> using Next.js & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
