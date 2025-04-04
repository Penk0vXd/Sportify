import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Следете прогреса си',
    description: 'Следете своето фитнес пътуване с подробни анализи и проследяване на напредъка.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Персонализирани тренировки',
    description: 'Създавайте и следвайте персонализирани тренировъчни програми според вашите цели.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    name: 'Библиотека с упражнения',
    description: 'Достъп до цялостна библиотека с упражнения и подробни инструкции.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
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
                  to="/calorie-calculator"
                  className="group relative overflow-hidden rounded-full bg-[#00c4ff] px-6 py-3 text-lg font-semibold font-accent text-white shadow-lg hover:bg-[#00a6d9] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>✨ Изчисли своите калории</span>
                    <svg className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"/>
                </Link>
              </motion.div>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              Вашето фитнес пътуване започва тук
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 font-body">
              От проследяване на тренировки до насоки за упражнения, Sportify предоставя всичко, от което се нуждаете, за да постигнете фитнес целите си.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/workouts"
                className="rounded-md bg-[#00c4ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00a6d9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00c4ff] font-accent"
              >
                Започнете сега
              </Link>
              <Link to="/exercises" className="text-sm font-semibold leading-6 text-white font-accent">
                Вижте упражненията <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00c4ff] font-accent">
            Всичко, от което се нуждаете
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            Цялостна фитнес платформа
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400 font-body">
            От проследяване на тренировки до насоки за упражнения, Sportify предоставя всичко, от което се нуждаете, за да постигнете фитнес целите си.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex flex-col items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00c4ff]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-white font-display">
                    {feature.name}
                  </h3>
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-400 font-body">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Готови ли сте да започнете фитнес пътуването си?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400 font-body">
            Присъединете се към хиляди потребители, които вече трансформират живота си с Sportify.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/workouts"
              className="rounded-md bg-[#00c4ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00a6d9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00c4ff] font-accent"
            >
              Започнете сега
            </Link>
            <Link to="/contact" className="text-sm font-semibold leading-6 text-white font-accent">
              Свържете се с нас <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home