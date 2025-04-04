import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  FireIcon,
  BoltIcon,
  CalendarIcon,
  CalculatorIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Начало', path: '/', icon: HomeIcon, ariaLabel: 'Отиди на началната страница' },
    { name: 'Тренировки', path: '/workouts', icon: FireIcon, ariaLabel: 'Виж всички тренировки' },
    { name: 'Упражнения', path: '/exercises', icon: BoltIcon, ariaLabel: 'Виж всички упражнения' },
    { name: 'График', path: '/schedule', icon: CalendarIcon, ariaLabel: 'Виж фитнес графика' },
    { name: 'Калории', path: '/calorie-calculator', icon: CalculatorIcon, ariaLabel: 'Изчисли калории' },
    { name: 'Контакт', path: '/contact', icon: EnvelopeIcon, ariaLabel: 'Свържи се с нас' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Основна навигация"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Начална страница"
          >
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c4ff] to-[#00b3e6]">
              Sportify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={link.ariaLabel}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-[#00c4ff]/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative flex items-center space-x-1">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{link.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00c4ff]"
            aria-label={isOpen ? 'Затвори менюто' : 'Отвори менюто'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#0B1120]/95 backdrop-blur-md border-t border-white/10"
        id="mobile-menu"
        role="navigation"
        aria-label="Мобилна навигация"
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#00c4ff]/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={link.ariaLabel}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 