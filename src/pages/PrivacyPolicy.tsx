import { motion } from 'framer-motion';
import { InformationCircleIcon, ShieldCheckIcon, LockClosedIcon, UserIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO 
        title="Политика за поверителност | Sportify - Фитнес в Сливен"
        description="Политика за поверителност на Sportify. Информация за обработката на лични данни, бисквитки и вашите права относно информацията, която събираме."
        keywords="политика за поверителност, лични данни, GDPR, бисквитки, сигурност на данните, sportify"
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
            Политика за поверителност
          </h1>
          <div className="flex justify-center items-center gap-2 mb-6">
            <ShieldCheckIcon className="h-6 w-6 text-[#00c4ff]" />
            <p className="text-gray-400 text-lg">
              Последно обновяване: {new Date().toLocaleDateString('bg-BG')}
            </p>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
            В Sportify се стремим да защитим вашата поверителност и лични данни. Тази политика обяснява как събираме, използваме и защитаваме информацията, която ни предоставяте.
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
              <InformationCircleIcon className="h-6 w-6 text-[#00c4ff]" />
              Въведение
            </h2>
            <p>
              Настоящата Политика за поверителност описва как Sportify ("ние", "нас", "нашия/нашите") събира, използва и споделя информация, когато посещавате нашия уебсайт <a href="https://sportify-bulgaria.com" className="text-[#00c4ff] hover:underline">https://sportify-bulgaria.com</a> ("Уебсайт").
            </p>
            <p>
              Ние се ангажираме да защитаваме вашата лична информация и вашето право на поверителност. Ако имате въпроси или притеснения относно нашата политика или практики по отношение на вашата лична информация, моля, свържете се с нас на sportify399@gmail.com.
            </p>
            <p>
              Тази политика за поверителност се прилага за цялата информация, събрана чрез нашия уебсайт, както и всички свързани услуги, продажби, маркетинг или събития.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Каква информация събираме
            </h2>
            <p>
              В зависимост от начина, по който взаимодействате с нашия уебсайт, можем да събираме различни видове информация:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <span className="font-semibold text-white">Лична информация:</span> Име, имейл адрес, телефонен номер, които предоставяте чрез нашата контактна форма или когато правите резервация за тренировка.
              </li>
              <li>
                <span className="font-semibold text-white">Данни от BMI калкулатор:</span> Височина, тегло и възраст, ако използвате нашите калкулатори за BMI и калории. Тези данни се обработват локално във вашия браузър и не се съхраняват на нашите сървъри.
              </li>
              <li>
                <span className="font-semibold text-white">Резервации за тренировки:</span> Информация за резервираните тренировки и предпочитаните от вас часове/дати.
              </li>
              <li>
                <span className="font-semibold text-white">Автоматично събрана информация:</span> Когато използвате уебсайта, автоматично събираме определена информация за вашето устройство, включително информация за вашия уеб браузър, IP адрес, часова зона и някои от бисквитките, които са инсталирани на вашето устройство.
              </li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <LockClosedIcon className="h-6 w-6 text-[#00c4ff]" />
              Как използваме вашата информация
            </h2>
            <p>
              Използваме информацията, която събираме, за различни цели:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>За обработка и управление на резервации за тренировки</li>
              <li>За отговаряне на запитвания и предоставяне на поддръжка на клиенти</li>
              <li>За изпращане на информация за нашите услуги, промоции и новини (ако сте се съгласили)</li>
              <li>За анализ на използването на нашия уебсайт и подобряване на неговата функционалност</li>
              <li>За спазване на законови задължения</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <UserIcon className="h-6 w-6 text-[#00c4ff]" />
              Споделяне на вашата информация
            </h2>
            <p>
              Ние не продаваме, не търгуваме, нито отдаваме под наем личните ви данни на трети страни. Въпреки това, можем да споделяме информация с доверени трети страни, които ни помагат в работата на нашия уебсайт, провеждането на нашия бизнес или обслужването ви, при условие че тези страни се съгласят да пазят тази информация в тайна.
            </p>
            <p>
              Партньори, с които можем да споделяме данни:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Google Analytics - за анализ на нашия уебсайт</li>
              <li>Google Tag Manager - за управление на скриптове</li>
              <li>Email.js - за изпращане на имейли от контактната форма</li>
              <li>Доставчици на платежни услуги (само ако предлагаме онлайн плащания)</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <div className="h-6 w-6 flex items-center justify-center bg-[#00c4ff] rounded-full text-white text-xs font-bold">C</div>
              Бисквитки и други технологии за проследяване
            </h2>
            <p>
              Използваме "бисквитки" за подобряване на вашето изживяване, докато използвате нашия Уебсайт. Бисквитките са малки файлове, които уебсайтът или неговият доставчик на услуги прехвърля на твърдия диск на вашия компютър чрез уеб браузъра ви (ако сте разрешили), което позволява на системите на сайта или на доставчика на услуги да разпознават вашия браузър и да улавят и запомнят определена информация.
            </p>
            <p>
              Използваме следните видове бисквитки:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <span className="font-semibold text-white">Необходими (Задължителни):</span> Тези бисквитки са необходими за функционирането на уебсайта и не могат да бъдат изключени. Те обикновено се задават само в отговор на действия, направени от вас, като например настройка на вашите предпочитания за поверителност, влизане или попълване на формуляри.
              </li>
              <li>
                <span className="font-semibold text-white">Аналитични:</span> Тези бисквитки ни позволяват да броим посещенията и източниците на трафик, за да можем да измерваме и подобряваме производителността на нашия сайт. Те ни помагат да разберем кои страници са най-популярни и да видим как посетителите се движат из сайта.
              </li>
              <li>
                <span className="font-semibold text-white">Маркетинг:</span> Тези бисквитки се използват за проследяване на посетителите в различни уебсайтове. Намерението е да се показват реклами, които са релевантни и ангажиращи за отделния потребител.
              </li>
            </ul>
            <p className="mt-4">
              Можете да настроите вашия браузър да отказва всички или някои бисквитки, или да ви предупреждава, когато уебсайтовете задават или осъществяват достъп до бисквитки. Ако деактивирате или откажете бисквитки, моля, имайте предвид, че някои части от този Уебсайт може да станат недостъпни или да не функционират правилно.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <ShieldCheckIcon className="h-6 w-6 text-[#00c4ff]" />
              Сигурност на данните
            </h2>
            <p>
              Предприели сме разумни мерки за сигурност, за да предотвратим случайна загуба, използване или достъп до вашата лична информация по неоторизиран начин, промяна или разкриване. Освен това, достъпът до вашата лична информация е ограничен до тези служители, агенти, изпълнители и други трети страни, които имат бизнес нужда да знаят.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <DocumentTextIcon className="h-6 w-6 text-[#00c4ff]" />
              Вашите права за защита на данните
            </h2>
            <p>
              Според Общия регламент за защита на данните (GDPR), имате редица права по отношение на личните ви данни:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Право на достъп до вашите лични данни</li>
              <li>Право на коригиране на неточни лични данни</li>
              <li>Право на изтриване на личните ви данни</li>
              <li>Право да ограничите обработката на вашите лични данни</li>
              <li>Право на преносимост на данните</li>
              <li>Право на възражение срещу обработката</li>
              <li>Право да не бъдете обект на решение, основано единствено на автоматизирана обработка</li>
            </ul>
            <p className="mt-4">
              За да упражните тези права, моля, свържете се с нас на sportify399@gmail.com.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <InformationCircleIcon className="h-6 w-6 text-[#00c4ff]" />
              Промени в тази политика за поверителност
            </h2>
            <p>
              Можем да актуализираме тази политика за поверителност от време на време, за да отразява, например, промени в нашите практики или по други оперативни, правни или регулаторни причини. Актуалната версия винаги ще бъде публикувана на нашия уебсайт.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mt-8 mb-4 font-display">
              <PhoneIcon className="h-6 w-6 text-[#00c4ff]" />
              Свържете се с нас
            </h2>
            <p>
              За повече информация относно нашите практики за поверителност или ако имате въпроси, моля, свържете се с нас на:
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

export default PrivacyPolicy; 