import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// FAQ data
const faqData = [
  {
    question: "Как мога да започна тренировки в Sportify?",
    answer: "За да започнете тренировки, посетете нашия фитнес център на бул. Стефан Караджа №14 или се свържете с нас по телефон за консултация и записване. Можете също така да резервирате час за тренировка чрез нашата форма за резервации в раздел График."
  },
  {
    question: "Какви видове тренировки предлагате?",
    answer: "Предлагаме разнообразни тренировки, включително силови тренировки, кардио сесии, функционален тренинг, групови занимания и персонални тренировки с инструктор. Нашите програми са подходящи за всички нива на подготовка."
  },
  {
    question: "Какви са работните часове на Sportify?",
    answer: "Работим всеки ден от 07:00 до 21:00 часа, включително през почивните и празничните дни."
  },
  {
    question: "Трябва ли да резервирам предварително за групови тренировки?",
    answer: "Да, препоръчваме предварителна резервация за всички групови тренировки, за да си гарантирате място. Можете да резервирате през нашия раздел График или като се свържете с нас по телефон."
  },
  {
    question: "Предлагате ли персонални треньори?",
    answer: "Да, разполагаме с екип от висококвалифицирани персонални треньори, които могат да създадат индивидуална програма, съобразена с вашите конкретни цели и физическо състояние."
  }
];

// Trainer data
const trainersData = [
  {
    name: "Александър Петров",
    position: "Старши треньор",
    specialty: "Силови тренировки, функционален тренинг",
    experience: "10+ години опит",
    image: "/images/trainers/trainer-1.jpg",
    certifications: ["NSCA-CPT", "ISSA Fitness Nutrition"]
  },
  {
    name: "Мария Иванова",
    position: "Групови тренировки",
    specialty: "HIIT, кардио, пилатес",
    experience: "8+ години опит",
    image: "/images/trainers/trainer-2.jpg",
    certifications: ["ACE-GFI", "Yoga Alliance RYT 200"]
  },
  {
    name: "Георги Димитров",
    position: "Персонален треньор",
    specialty: "Хипертрофия, спортно програмиране",
    experience: "7+ години опит",
    image: "/images/trainers/trainer-3.jpg",
    certifications: ["NASM-CPT", "Precision Nutrition Level 1"]
  }
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Initialize EmailJS with the contact form public key
    emailjs.init(import.meta.env.VITE_EMAILJS_CONTACT_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_CONTACT_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Съобщението беше изпратено успешно!'
        });
        setFormData({ from_name: '', from_email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Възникна грешка при изпращането на съобщението. Моля, опитайте отново.'
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO 
        title="Контакти | Sportify - Фитнес в Сливен"
        description="Свържете се с екипа на Sportify. Фитнес център в Сливен с професионални треньори и модерно оборудване. Адрес, телефон и работно време."
        keywords="контакти, фитнес зала Сливен, треньори, Sportify контакти, работно време, адрес, фитнес"
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00c4ff]/20 to-transparent blur-3xl transform rotate-12 opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#00c4ff]/20 to-transparent blur-3xl transform -rotate-12 opacity-30" />
      </div>

      <div className="relative container mx-auto px-4 py-4 md:py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Свържете се с нас
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-body">
            Имате въпроси или искате да се свържете с нас? Използвайте формата по-долу или ни потърсете чрез другите методи за контакт.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)]"
            >
              <h2 className="text-2xl font-semibold text-white mb-8 font-display">Контактна информация</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-[#00c4ff] flex-shrink-0" />
                  <div>
                    <h3 className="font-accent font-medium">Имейл</h3>
                    <p className="text-gray-400 font-body mt-1">sportify399@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-[#00c4ff] flex-shrink-0" />
                  <div>
                    <h3 className="font-accent font-medium">Телефон</h3>
                    <p className="text-gray-400 font-body mt-1">+359 879 069 966</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-[#00c4ff] flex-shrink-0" />
                  <div>
                    <h3 className="font-accent font-medium">Адрес</h3>
                    <p className="text-gray-400 font-body mt-1">бул. Стефан Караджа №14, гр. Сливен</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-[#00c4ff] flex-shrink-0" />
                  <div>
                    <h3 className="font-accent font-medium">Работно време</h3>
                    <p className="text-gray-400 font-body mt-1">Понеделник - Неделя: 07:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)]"
            >
              <h2 className="text-2xl font-semibold text-white mb-8 font-display">Местоположение</h2>
              <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/[0.05]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.635786133568!2d26.310151515845834!3d42.67890007916703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a62732cd2866dd%3A0xf5f28a2c6057d9ee!2sSouthern%20Industrial%20Zone%2C%20bul.%20%22Stefan%20Karadzha%22%2014%2C%208800%20Sliven%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1710183027090!5m2!1sen!2sbg"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Sportify Location"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)]"
          >
            <h2 className="text-2xl font-semibold text-white mb-8 font-display">Изпратете съобщение</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Име
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="Вашето име"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Имейл
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-body">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body resize-none"
                  placeholder="Вашето съобщение..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] text-white font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(0,196,255,0.2)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:ring-offset-2 focus:ring-offset-[#0B1120] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none font-accent ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? 'Изпращане...' : 'Изпрати'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-lg text-center ${
              submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">Често задавани въпроси</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-body">
              Намерете отговори на най-често задаваните въпроси за нашия фитнес център и услуги
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-5 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] focus:outline-none transition-all duration-300 ${
                    expandedFaq === index ? 'shadow-[0_0_20px_rgba(0,196,255,0.1)]' : ''
                  }`}
                  aria-expanded={expandedFaq === index}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium text-lg font-display">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-[#00c4ff]" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-300 font-body"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 