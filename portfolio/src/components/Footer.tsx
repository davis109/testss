import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Davis Sebastian
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Full Stack Software Engineer passionate about building innovative solutions 
            and ready for challenging global roles.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/davis109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500" /> by Davis Sebastian
            </p>
            <p className="text-gray-600 text-sm mt-2">
              © 2025 Davis Sebastian. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
