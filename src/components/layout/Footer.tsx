import { Link } from 'react-router-dom';
import {
  HomeIcon,
  FireIcon,
  BoltIcon,
  CalendarIcon,
  CalculatorIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BookOpenIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Sportify</h3>
            <p className="text-sm">
              Вашият персонален фитнес партньор за по-здравословен и активен начин на живот.
            </p>
            <div className="space-y-4">
              <a href="tel:+359888123456" className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                +359 879 069 966
              </a>
              <a href="mailto:info@sportify-bulgaria.com" className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                sportify399@gmail.com
              </a>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span> бул. Стефан Караджа №14, гр. Сливен</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Основна навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center hover:text-white transition-colors">
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/workouts" className="flex items-center hover:text-white transition-colors">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Тренировки
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="flex items-center hover:text-white transition-colors">
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  Упражнения
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="flex items-center hover:text-white transition-colors">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  График
                </Link>
              </li>
              <li>
                <Link to="/calorie-calculator" className="flex items-center hover:text-white transition-colors">
                  <CalculatorIcon className="h-5 w-5 mr-2" />
                  Калории
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-white transition-colors">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Контакт
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Социални мрежи</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.facebook.com/fashion.dessiree/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <FaFacebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/sportify.bulgaria/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <FaInstagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Работно време</h3>
            <ul className="space-y-2">
              <li>Понеделник - Неделя: 07:00 - 21:00</li>
            </ul>
            
            {/* Legal Links */}
            <h3 className="text-white text-lg font-semibold mb-4 mt-6">Правна информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="flex items-center hover:text-white transition-colors">
                  <ShieldCheckIcon className="h-5 w-5 mr-2" />
                  Политика за поверителност
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="flex items-center hover:text-white transition-colors">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Общи условия
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Sportify. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;