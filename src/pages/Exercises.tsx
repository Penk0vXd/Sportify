import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  FireIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

// Exercise categories with their respective exercises
const exerciseCategories = [
  {
    id: 'strength',
    name: 'Силови упражнения',
    description: 'Упражнения за изграждане на мускулна маса и сила',
    icon: SparklesIcon,
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-600/20 to-amber-600/20',
    exercises: [
      {
        name: 'Клек',
        muscles: ['Квадрицепс', 'Глутеус', 'Задна част на бедрото'],
        difficulty: 'Средно',
        equipment: 'Без оборудване/Щанга',
        description: 'Основно упражнение за долната част на тялото, което ангажира множество мускулни групи.',
        tips: [
          'Дръжте гърба изправен',
          'Коленете да не минават пръстите на краката',
          'Клякайте до успоредно на пода положение'
        ]
      },
      {
        name: 'Набиране',
        muscles: ['Гръб', 'Бицепс', 'Предмишници'],
        difficulty: 'Трудно',
        equipment: 'Лост',
        description: 'Комплексно упражнение за горната част на тялото, фокусирано върху гърба.',
        tips: [
          'Започнете с широк хват',
          'Издърпайте се докато брадичката мине лоста',
          'Контролирайте движението надолу'
        ]
      },
      {
        name: 'Bench Press',
        muscles: ['Гърди', 'Трицепс', 'Рамене'],
        difficulty: 'Средно',
        equipment: 'Пейка, Щанга',
        description: 'Класическо упражнение за развиване на горната част на тялото.',
        tips: [
          'Дръжте лактите под 90 градуса',
          'Вдишвайте при спускане',
          'Издишвайте при бутане'
        ]
      },
      {
        name: 'Мъртва тяга',
        muscles: ['Гръб', 'Глутеус', 'Задна част на бедрото', 'Трапец'],
        difficulty: 'Трудно',
        equipment: 'Щанга',
        description: 'Комплексно упражнение за цялото тяло с фокус върху задната верига.',
        tips: [
          'Дръжте гърба изправен през цялото време',
          'Движението започва от бедрата',
          'Щангата трябва да се движи близо до краката'
        ]
      },
      {
        name: 'Военна преса',
        muscles: ['Рамене', 'Трицепс', 'Горна част на гърди'],
        difficulty: 'Средно',
        equipment: 'Щанга/Дъмбели',
        description: 'Основно упражнение за развиване на раменния пояс.',
        tips: [
          'Не прегъвайте гърба назад',
          'Движението е строго нагоре',
          'Контролирайте тежестта при спускане'
        ]
      },
      {
        name: 'Румънска мъртва тяга',
        muscles: ['Задна част на бедрото', 'Глутеус', 'Долна част на гръб'],
        difficulty: 'Средно',
        equipment: 'Щанга/Дъмбели',
        description: 'Упражнение за развиване на задната част на краката и долната част на гърба.',
        tips: [
          'Леко свити колене',
          'Движението е от ханша',
          'Гърбът остава прав през цялото време'
        ]
      },
      {
        name: 'Лицеви опори',
        muscles: ['Гърди', 'Рамене', 'Трицепс'],
        difficulty: 'Средно',
        equipment: 'Без оборудване',
        description: 'Класическо упражнение за горна част на тялото.',
        tips: [
          'Дръжте тялото изпънато',
          'Лактите близо до тялото',
          'Гледайте напред'
        ]
      }
    ]
  },
  {
    id: 'cardio',
    name: 'Кардио упражнения',
    description: 'Упражнения за издръжливост и изгаряне на калории',
    icon: FireIcon,
    color: 'text-orange-500',
    bgGradient: 'from-orange-600/20 to-red-600/20',
    exercises: [
      {
        name: 'Бърпи',
        muscles: ['Цяло тяло'],
        difficulty: 'Трудно',
        equipment: 'Без оборудване',
        description: 'Интензивно упражнение, което комбинира кардио с силова тренировка.',
        tips: [
          'Започнете бавно и постепенно увеличавайте темпото',
          'Фокусирайте се върху правилната форма',
          'Правете почивки при нужда'
        ]
      },
      {
        name: 'Планински катерачи',
        muscles: ['Корем', 'Рамене', 'Крака'],
        difficulty: 'Средно',
        equipment: 'Без оборудване',
        description: 'Динамично упражнение за цялото тяло с фокус върху кардио издръжливостта.',
        tips: [
          'Поддържайте стабилно тяло',
          'Движете краката бързо и контролирано',
          'Дръжте раменете стабилни'
        ]
      },
      {
        name: 'Джъмпинг Джак',
        muscles: ['Цяло тяло'],
        difficulty: 'Лесно',
        equipment: 'Без оборудване',
        description: 'Класическо кардио упражнение за цялото тяло.',
        tips: [
          'Приземявайте се меко',
          'Координирайте ръцете и краката',
          'Поддържайте постоянно темпо'
        ]
      },
      {
        name: 'Високи колене',
        muscles: ['Крака', 'Корем'],
        difficulty: 'Средно',
        equipment: 'Без оборудване',
        description: 'Динамично упражнение за долната част на тялото и сърдечно-съдовата система.',
        tips: [
          'Повдигайте коленете високо',
          'Поддържайте изправен гръб',
          'Движете ръцете в ритъм с краката'
        ]
      },
      {
        name: 'Скачане на въже',
        muscles: ['Крака', 'Прасци', 'Рамене'],
        difficulty: 'Средно',
        equipment: 'Въже за скачане',
        description: 'Ефективно кардио упражнение за цялото тяло.',
        tips: [
          'Скачайте на пръсти',
          'Дръжте лактите близо до тялото',
          'Въртете въжето от китките'
        ]
      },
      {
        name: 'Спринт на място',
        muscles: ['Крака', 'Корем'],
        difficulty: 'Средно',
        equipment: 'Без оборудване',
        description: 'Интензивно кардио упражнение за изгаряне на калории.',
        tips: [
          'Движете ръцете енергично',
          'Повдигайте коленете',
          'Поддържайте бързо темпо'
        ]
      }
    ]
  },
  {
    id: 'flexibility',
    name: 'Упражнения за гъвкавост',
    description: 'Упражнения за подобряване на гъвкавостта и мобилността',
    icon: HeartIcon,
    color: 'text-pink-500',
    bgGradient: 'from-pink-600/20 to-purple-600/20',
    exercises: [
      {
        name: 'Разтягане на хамстринг',
        muscles: ['Задна част на бедрото'],
        difficulty: 'Лесно',
        equipment: 'Постелка',
        description: 'Основно разтягане за подобряване гъвкавостта на задната част на краката.',
        tips: [
          'Не прекалявайте с разтягането',
          'Дишайте равномерно',
          'Задръжте позицията за 30 секунди'
        ]
      },
      {
        name: 'Котешки гръб',
        muscles: ['Гръб', 'Корем'],
        difficulty: 'Лесно',
        equipment: 'Постелка',
        description: 'Леко разтягане за гръбначния стълб и коремните мускули.',
        tips: [
          'Движете се бавно между позициите',
          'Синхронизирайте дишането с движенията',
          'Фокусирайте се върху всеки прешлен'
        ]
      },
      {
        name: 'Детска поза',
        muscles: ['Гръб', 'Рамене', 'Ханш'],
        difficulty: 'Лесно',
        equipment: 'Постелка',
        description: 'Успокояващо разтягане за гърба и раменете.',
        tips: [
          'Отпуснете се напълно',
          'Дишайте дълбоко',
          'Разширявайте гърба при вдишване'
        ]
      },
      {
        name: 'Гълъб',
        muscles: ['Ханш', 'Глутеус', 'Бедра'],
        difficulty: 'Средно',
        equipment: 'Постелка',
        description: 'Дълбоко разтягане за ханша и седалищните мускули.',
        tips: [
          'Влезте в позата постепенно',
          'Дръжте гърба изправен',
          'Не насилвайте ставите'
        ]
      },
      {
        name: 'Разтягане на квадрицепс',
        muscles: ['Предна част на бедрото'],
        difficulty: 'Лесно',
        equipment: 'Без оборудване',
        description: 'Ефективно разтягане за предната част на бедрата.',
        tips: [
          'Дръжте равновесие',
          'Не прегъвайте прекалено коляното',
          'Дръжте тялото изправено'
        ]
      },
      {
        name: 'Мост',
        muscles: ['Гръб', 'Глутеус', 'Предна част на тялото'],
        difficulty: 'Средно',
        equipment: 'Постелка',
        description: 'Разтягане на цялото тяло с фокус върху гръбначния стълб.',
        tips: [
          'Повдигайте се постепенно',
          'Активирайте глутеусите',
          'Дръжте раменете стабилни'
        ]
      },
      {
        name: 'Разтягане на прасец',
        muscles: ['Прасци'],
        difficulty: 'Лесно',
        equipment: 'Стена/Стъпало',
        description: 'Ефективно разтягане за долната част на краката.',
        tips: [
          'Дръжте петата на земята',
          'Наклонете се напред',
          'Задръжте позицията'
        ]
      }
    ]
  }
]

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Filter exercises based on search term and filters
  const filteredCategories = exerciseCategories
    .map(category => ({
      ...category,
      exercises: category.exercises.filter(exercise => {
        const matchesSearch = searchTerm === '' || 
          exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          exercise.muscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()))
        
        const matchesCategory = !selectedCategory || category.id === selectedCategory
        const matchesDifficulty = !selectedDifficulty || exercise.difficulty === selectedDifficulty

        return matchesSearch && matchesCategory && matchesDifficulty
      })
    }))
    .filter(category => category.exercises.length > 0)

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
          className="text-center mb-12 mt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
            Библиотека с упражнения
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Открийте нашата колекция от упражнения с подробни инструкции и съвети за правилно изпълнение
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Търсете по име, мускулна група или описание..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Всички категории</option>
                {exerciseCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty || ''}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Всички нива</option>
                <option value="Лесно">Лесно</option>
                <option value="Средно">Средно</option>
                <option value="Трудно">Трудно</option>
              </select>
            </div>
          </div>
        </div>

        {/* Exercise Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl`}
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-2xl bg-white/10 ${category.color} mr-4`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.exercises.map((exercise, exerciseIndex) => (
                  <motion.div
                    key={exercise.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + exerciseIndex * 0.1 }}
                    className="bg-white/10 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{exercise.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{exercise.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <span className="font-medium mr-2">Сложност:</span>
                        <span className={`
                          px-2 py-1 rounded-full text-xs
                          ${exercise.difficulty === 'Лесно' ? 'bg-green-500/20 text-green-400' : 
                            exercise.difficulty === 'Средно' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'}
                        `}>
                          {exercise.difficulty}
                        </span>
                      </div>
                      <div className="text-gray-300 text-sm">
                        <span className="font-medium">Оборудване:</span> {exercise.equipment}
                      </div>
                      <div className="text-gray-300 text-sm">
                        <span className="font-medium">Мускулни групи:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {exercise.muscles.map(muscle => (
                            <span key={muscle} className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-400">
                              {muscle}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Съвети:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                        {exercise.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exercises