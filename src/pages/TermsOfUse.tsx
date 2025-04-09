import { motion } from 'framer-motion';
import { GlobeAltIcon, ScaleIcon, ShieldCheckIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

const TermsOfUse = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO 
        title="Общи условия | Sportify - Фитнес в Сливен"
        description="Общи условия за използване на уебсайта на Sportify. Информация за правата и задълженията при използване на нашите услуги и уебсайт."
        keywords="общи условия, правни условия, политика, фитнес, sportify, авторски права, права за използване"
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00c4ff]/10 to-transparent blur-3xl transform rotate-12 opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#00c4ff]/10 to-transparent blur-3xl transform -rotate-12 opacity-30" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Общи условия
          </h1>
          <div className="flex justify-center items-center gap-2 mb-6">
            <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
            <p className="text-gray-400 text-lg">
              Последно обновяване: {new Date().toLocaleDateString('bg-BG')}
            </p>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
            Моля, прочетете внимателно тези общи условия преди да използвате нашия уебсайт.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)] max-w-4xl mx-auto mb-8"
        >
          <div className="prose prose-invert prose-blue max-w-none font-body">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4 font-display">
              <GlobeAltIcon className="h-6 w-6 text-[#00c4ff]" />
              Въведение
            </h2>
            <p>
              Настоящите общи условия уреждат използването на уебсайта <a href="https://sportify-bulgaria.com" className="text-[#00c4ff] hover:underline">https://sportify-bulgaria.com</a> ("Уебсайт"), собственост на Sportify.
            </p>
            <p>
              Използвайки нашия Уебсайт, вие приемате тези условия изцяло. Ако не сте съгласни с тези условия или някоя част от тях, не трябва да използвате нашия Уебсайт.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Използване на уебсайта
            </h2>
            <p>
              Този Уебсайт предоставя възможност за информация относно фитнес услуги, онлайн резервации за тренировки и фитнес калкулатори.
            </p>
            <p>
              Вие се съгласявате, че няма да:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Използвате нашия Уебсайт по начин, който причинява или може да причини повреда на Уебсайта или възпрепятстване на достъпа до него</li>
              <li>Използвате нашия Уебсайт по незаконен, измамен или вреден начин</li>
              <li>Използвате нашия Уебсайт, за да копирате, съхранявате, хоствате, предавате, изпращате, използвате, публикувате или разпространявате материали, съдържащи шпионски софтуер, компютърни вируси, троянски коне, червеи или друг злонамерен компютърен софтуер</li>
              <li>Извършвате системни или автоматизирани действия за събиране на данни от или свързани с нашия Уебсайт без нашето изрично писмено съгласие</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Уговаряне на тренировки и отказ
            </h2>
            <p>
              Чрез нашия Уебсайт можете да резервирате тренировки, които са обвързващи споразумения.
            </p>
            <p>
              Условията за отказ от резервирана тренировка са следните:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Отказ най-малко 24 часа преди началото на тренировката – без такса за отказ</li>
              <li>Отказ по-малко от 24 часа преди началото на тренировката – може да се приложи такса за отказ</li>
              <li>Неявяване без предварително известие – пълна такса за тренировката</li>
            </ul>
            <p>
              Имаме право да откажем или отменим резервация по наше усмотрение, особено при извънредни обстоятелства или технически проблеми.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <LockClosedIcon className="h-6 w-6 text-[#00c4ff]" />
              Точност на информацията и ограничаване на отговорността
            </h2>
            <p>
              Ние се стремим да предоставяме точна и актуална информация на нашия Уебсайт, но не можем да гарантираме, че цялото съдържание е абсолютно точно или пълно. Съдържанието на нашия Уебсайт се предоставя на принципа "както е" и "както е налично", без никакви гаранции.
            </p>
            <p>
              До максималната степен, разрешена от закона, изключваме:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Всички представи, гаранции и други условия, които могат да се подразбират</li>
              <li>Отговорност за всякакви директни, индиректни или последващи загуби или щети, претърпени от потребител във връзка с нашия Уебсайт или във връзка с използването, невъзможността за използване или резултатите от използването на нашия Уебсайт</li>
            </ul>
            <p>
              Това не засяга нашата отговорност за смърт или телесна повреда, произтичаща от нашата небрежност, нито нашата отговорност за измама или измамно представяне, нито всякакви други отговорности, които не могат да бъдат изключени или ограничени според приложимото законодателство.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <ScaleIcon className="h-6 w-6 text-[#00c4ff]" />
              Интелектуална собственост
            </h2>
            <p>
              Ние сме собственици или лицензополучатели на всички права върху интелектуалната собственост в нашия Уебсайт и материалите, публикувани на него. Тези произведения са защитени от закони и договори за авторско право по целия свят. Всички такива права са запазени.
            </p>
            <p>
              Вие нямате право да:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Продавате, отдавате под наем или сублицензирате материали от нашия Уебсайт</li>
              <li>Възпроизвеждате, дублирате, копирате или използвате повторно материали от нашия Уебсайт за търговски цели</li>
              <li>Разпространявате материали от нашия Уебсайт</li>
            </ul>
            <p>
              Можете да:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Преглеждате страниците от нашия Уебсайт в браузър</li>
              <li>Изтегляте страници от нашия Уебсайт за кеширане в браузър</li>
              <li>Отпечатвате страници от нашия Уебсайт за ваше лично, некомерсиално използване</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <ShieldCheckIcon className="h-6 w-6 text-[#00c4ff]" />
              Поверителност и бисквитки
            </h2>
            <p>
              Използването на лична информация, предоставена чрез нашия Уебсайт, е уредено от нашата <a href="/privacy-policy" className="text-[#00c4ff] hover:underline">Политика за поверителност</a>.
            </p>
            <p>
              Използването на бисквитки и подобни технологии е уредено от нашата <a href="/privacy-policy" className="text-[#00c4ff] hover:underline">Политика за поверителност</a>.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Медицински опровержения
            </h2>
            <p>
              Информацията на нашия Уебсайт, включително тази, предоставена от калкулаторите за BMI и калории, е само за информационни цели. Тя не представлява медицински съвет и не трябва да се разчита на нея като алтернатива на професионален медицински съвет, диагноза или лечение.
            </p>
            <p>
              Винаги търсете съвета на вашия лекар или друг квалифициран здравен доставчик с въпроси, които може да имате относно медицинско състояние или фитнес режим.
            </p>
            <p>
              Не игнорирайте професионален медицински съвет и не отлагайте търсенето на такъв поради нещо, което сте прочели на нашия Уебсайт.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Промяна на условията
            </h2>
            <p>
              Ние можем да актуализираме тези условия от време на време. Проверявайте тази страница периодично, за да сте сигурни, че сте доволни от направените промени, тъй като те са обвързващи за вас.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <GlobeAltIcon className="h-6 w-6 text-[#00c4ff]" />
              Приложимо право
            </h2>
            <p>
              Тези общи условия се уреждат и тълкуват в съответствие с българското законодателство. Всички спорове, произтичащи от или във връзка с тези общи условия, подлежат на изключителната юрисдикция на българските съдилища.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <PhoneIcon className="h-6 w-6 text-[#00c4ff]" />
              Свържете се с нас
            </h2>
            <p>
              Ако имате въпроси относно тези условия, моля, свържете се с нас на:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> sportify399@gmail.com
            </p>
            <p>
              <strong>Телефон:</strong> +359879 069 966
            </p>
            <p>
              <strong>Адрес:</strong> бул. Стефан Караджа №14, Сливен, 8800, България
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export default TermsOfUse; 