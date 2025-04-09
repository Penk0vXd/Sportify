import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FireIcon, CheckCircleIcon, ClockIcon, UsersIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import SEO from '../components/SEO'

const features = [
  {
    name: 'Професионални треньори',
    description: 'Работете с висококвалифицирани треньори, които ще ви насочват към постигане на целите ви и ще съобразят тренировъчната програма с вашите нужди.',
    icon: (
      <UsersIcon className="h-6 w-6 text-white" />
    ),
  },
  {
    name: 'Персонализирани тренировки',
    description: 'Получете индивидуален подход и програма, съобразена с вашите цели, физическа подготовка и предпочитания.',
    icon: (
      <FireIcon className="h-6 w-6 text-white" />
    ),
  },
  {
    name: 'Гъвкаво работно време',
    description: 'Нашият фитнес център е отворен от 7:00 до 21:00 всеки ден, така че можете да тренирате когато е удобно за вас.',
    icon: (
      <ClockIcon className="h-6 w-6 text-white" />
    ),
  },
]

const achievements = [
  { number: "3+", text: "години опит" },
  { number: "50+", text: "доволни клиенти" },
  { number: "5+", text: "треньори" },
  { number: "5+", text: "уникални тренировки" }
]

const workoutTypes = [
  {
    name: "Силови тренировки",
    description: "Увеличете мускулната маса и силата с нашите специализирани силови тренировки.",
    image: "/images/programs/strength.jpg"
  },
  {
    name: "Кардио сесии",
    description: "Подобрете сърдечно-съдовата си система и изгорете калории с енергични кардио тренировки.",
    image: "/images/programs/cardio.jpg"
  },
  {
    name: "Функционален тренинг",
    description: "Подобрете всекидневните си движения и общата физическа форма с функционални упражнения.",
    image: "/images/programs/functional.jpg"
  },
  {
    name: "HIIT тренировки",
    description: "Максимални резултати за минимално време с интервалните тренировки с висока интензивност.",
    image: "/images/programs/hiit.jpg"
  }
]

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <SEO 
        title="Sportify - Премиум Фитнес Център в Сливен | Персонални тренировки и групови занимания"
        description="Постигнете фитнес целите си с Sportify - модерен фитнес център в Сливен. Професионални треньори, разнообразни тренировки и персонализиран подход за всички нива."
        keywords="фитнес, спортна зала, тренировки, Сливен, персонален треньор, групови занимания, фитнес програми, силови тренировки, кардио, отслабване"
      />

      {/* Hero section with background effect */}
      <div className="relative isolate overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-[#00c4ff] to-[#0050db] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} 
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
                className="mb-8 flex justify-center lg:justify-start"
              >
                <Link
                  to="/schedule"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] px-6 py-3 text-lg font-semibold font-accent text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5" />
                    <span>Запишете се за тренировка</span>
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"/>
                </Link>
              </motion.div>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              Вашият път към по-добра форма започва тук
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 font-body">
              Sportify е модерен фитнес център в Сливен, предлагащ професионални тренировки, персонализиран подход и съвременно оборудване за всички нива на физическа подготовка.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/workouts"
                className="rounded-lg bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-accent"
              >
                Разгледайте тренировките
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white flex items-center gap-x-1 group font-accent">
                Свържете се с нас 
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Модерна фитнес зала Sportify в Сливен с професионално оборудване"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00c4ff]/10 to-[#00a6d9]/10 opacity-60" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-[#00c4ff] mb-2 font-display">{achievement.number}</h2>
                <p className="text-gray-300 font-body">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00c4ff] font-accent">
            ЗАЩО ДА ИЗБЕРЕТЕ НАС
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            Вашият надежден фитнес партньор
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-300 font-body">
            В Sportify вярваме, че всеки заслужава персонализиран подход към фитнеса. Нашият екип от професионалисти е тук, за да ви помогне да постигнете трайни резултати.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)] hover:shadow-[0_0_30px_rgba(0,196,255,0.1)] transition-shadow duration-300"
              >
                <dt className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white font-display">
                    {feature.name}
                  </h3>
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-300 font-body">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Workout Types Section */}
      <div className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#00c4ff] font-accent">
              ПРОГРАМИ
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
              Разнообразни тренировки за всички
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-300 font-body">
              Независимо от вашите цели, имаме програма, която отговаря на вашите нужди
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workoutTypes.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group h-96 shadow-[0_5px_30px_rgba(0,0,0,0.3)]"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20"></div>
                <img 
                  src={workout.image} 
                  alt={workout.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-[#00c4ff]">
                    {workout.name}
                  </h3>
                  <p className="text-gray-300 font-body text-lg">{workout.description}</p>
                  <div className="mt-6 transform opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link 
                      to="/workouts" 
                      className="inline-flex items-center text-sm font-medium text-[#00c4ff] hover:text-white font-accent gap-1 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                      Научете повече
                      <ArrowRightIcon className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>  

      {/* CTA section */}
      <div className="relative isolate mt-8 px-6 py-32 sm:mt-16 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.125rem] bg-gradient-to-tr from-[#00c4ff] to-[#0050db]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Готови ли сте да започнете фитнес пътуването си?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-gray-300 font-body">
              Елате в нашия фитнес център на адрес: <strong>бул. Стефан Караджа №14, гр. Сливен</strong> или се свържете с нас за повече информация.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-lg bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-accent"
              >
                Свържете се с нас
              </Link>
              <Link to="/schedule" className="text-sm font-semibold leading-6 text-white flex items-center gap-x-1 group font-accent">
                Вижте графика 
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home