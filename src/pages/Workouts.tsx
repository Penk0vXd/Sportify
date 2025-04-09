import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FireIcon,
  HeartIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  BoltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const workoutCategories = [
  {
    id: 'cardio',
    name: 'Кардио',
    description: 'Интензивни тренировки за издръжливост и изгаряне на калории',
    icon: FireIcon,
    color: 'text-orange-500',
    bgGradient: 'from-orange-600/20 to-red-600/20',
    workouts: [
      {
        name: 'HIIT',
        duration: '45 мин',
        intensity: 'Висока',
        calories: '400-600',
        description: 'Интервални тренировки с висока интензивност за максимално изгаряне на калории',
        benefits: ['Изгаряне на мазнини', 'Издръжливост', 'Сила']
      },

      {
        name: 'Зумба',
        duration: '50 мин',
        intensity: 'Средна',
        calories: '300-500',
        description: 'Забавна танцова тренировка с латино ритми',
        benefits: ['Координация', 'Настроение', 'Издръжливост']
      },
    ],
  },
  {
    id: 'strength',
    name: 'Сила',
    description: 'Тренировки за изграждане на мускулна маса и сила',
    icon: SparklesIcon,
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-600/20 to-amber-600/20',
    workouts: [
      {
        name: 'Body Pump',
        duration: '55 мин',
        intensity: 'Средна-Висока',
        calories: '400-600',
        description: 'Силова тренировка с тежести за цяло тяло',
        benefits: ['Мускулна маса', 'Сила', 'Издръжливост']
      },
      {
        name: 'Body Work',
        duration: '45 мин',
        intensity: 'Средна',
        calories: '300-500',
        description: 'Функционална тренировка за сила и издръжливост',
        benefits: ['Функционална сила', 'Баланс', 'Стабилност']
      },
      {
        name: 'Кръгова тренировка',
        duration: '50 мин',
        intensity: 'Висока',
        calories: '400-600',
        description: 'Интензивна кръгова тренировка за цяло тяло',
        benefits: ['Сила', 'Издръжливост', 'Координация']
      },
    ],
  },
  {
    id: 'flexibility',
    name: 'Гъвкавост',
    description: 'Тренировки за подобряване на гъвкавостта и баланса',
    icon: HeartIcon,
    color: 'text-pink-500',
    bgGradient: 'from-pink-600/20 to-purple-600/20',
    workouts: [
      {
        name: 'Пилатес',
        duration: '50 мин',
        intensity: 'Ниска-Средна',
        calories: '200-300',
        description: 'Тренировка за сила, гъвкавост и контрол на тялото',
        benefits: ['Гъвкавост', 'Стабилност', 'Баланс']
      },
      {
        name: 'Стречинг',
        duration: '45 мин',
        intensity: 'Ниска',
        calories: '150-250',
        description: 'Разтягане и релаксация за цялото тяло',
        benefits: ['Гъвкавост', 'Релаксация', 'Възстановяване']
      },
    ],
  },
]

const Workouts = () => {
  return (
    <div className="min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent rotate-12 transform scale-150"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-cyan-500/10 to-transparent -rotate-12 transform scale-150"></div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16 mt-8 md:mt-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 md:mb-6 px-4">
            Нашите Тренировки
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Открийте разнообразието от тренировки, които предлагаме. От интензивно кардио до
            релаксиращо стречинг - имаме всичко необходимо за вашите фитнес цели.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8 md:space-y-20 mb-12 md:mb-20">
          {workoutCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-xl`}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-10 gap-4 md:gap-6">
                <div className="flex items-center">
                  <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/10 ${category.color} mr-3 md:mr-4`}>
                    <category.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{category.name}</h2>
                    <p className="text-sm md:text-lg text-gray-300">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {category.workouts.map((workout, workoutIndex) => (
                  <motion.div
                    key={workout.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + workoutIndex * 0.1 }}
                    className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">
                      {workout.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{workout.description}</p>
                    
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center text-gray-300">
                        <ClockIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-400" />
                        <span className="text-sm md:text-base">{workout.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <BoltIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-yellow-400" />
                        <span className="text-sm md:text-base">{workout.intensity} интензивност</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <ChartBarIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-green-400" />
                        <span className="text-sm md:text-base">{workout.calories} kcal</span>
                      </div>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <div className="text-xs md:text-sm text-gray-400 mb-2">Ползи:</div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {workout.benefits.map((benefit) => (
                          <span key={benefit} className="px-2 py-0.5 md:px-3 md:py-1 bg-white/5 rounded-full text-xs md:text-sm text-gray-300">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/schedule"
                      className="inline-flex items-center justify-center w-full px-3 py-2 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors group"
                    >
                      <span className="text-xs md:text-sm font-medium">Запиши се</span>
                      <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center backdrop-blur-xl shadow-xl"
        >
          <div className="inline-flex items-center justify-center p-2 md:p-3 rounded-xl md:rounded-2xl bg-blue-500/20 text-blue-400 mb-4 md:mb-6">
            <UserGroupIcon className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Готови ли сте да започнете?
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Присъединете се към нашата общност от ентусиасти и започнете своето фитнес пътешествие още днес.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm md:text-base font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            Вижте графика
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Workouts