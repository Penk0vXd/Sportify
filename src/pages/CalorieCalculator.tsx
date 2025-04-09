import { useState } from 'react'
import { motion } from 'framer-motion'
import BMICalculator from '../components/calculators/BMICalculator'
import { InformationCircleIcon, ArrowPathIcon, FireIcon, ScaleIcon } from '@heroicons/react/24/outline'

const CalorieCalculator = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('1.2')
  const [calorieAdjustment, setCalorieAdjustment] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [activeCalculator, setActiveCalculator] = useState<'calories' | 'bmi'>('calories')
  const [results, setResults] = useState<{
    bmr: number
    maintenance: number
    adjusted: number
  } | null>(null)

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Harris-Benedict BMR Formula
    let bmr = gender === 'male'
      ? 88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))
      : 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))

    const maintenance = Math.round(bmr * Number(activityLevel))
    
    // Calculate adjusted calories (positive = surplus, negative = deficit)
    const adjustmentFactor = calorieAdjustment / 100
    const adjustedCalories = Math.round(maintenance * (1 + adjustmentFactor))
    
    setResults({
      bmr: Math.round(bmr),
      maintenance,
      adjusted: adjustedCalories
    })
  }

  return (
    <div className="relative min-h-screen py-16 px-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-[#00c4ff]/10 to-transparent blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            delay: 1,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <motion.div 
              className="flex items-center justify-center gap-3 mb-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="h-1 w-10 bg-gradient-to-r from-[#00c4ff] to-purple-500 rounded-full"></div>
              <span className="text-[#00c4ff] text-sm uppercase tracking-widest font-accent">Sportify Инструменти</span>
              <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-[#00c4ff] rounded-full"></div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#00c4ff]/90">
              Фитнес Калкулатори
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Изчислете своите дневни калорийни нужди и индекс на телесна маса за постигане на оптимални резултати
          </p>
        </motion.div>

        {/* Calculator Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/[0.03] backdrop-blur-md rounded-full border border-white/[0.05] p-1 flex">
            <button
              onClick={() => setActiveCalculator('calories')}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCalculator === 'calories'
                  ? 'text-white bg-gradient-to-r from-[#00c4ff] to-[#0090db] shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Калории
            </button>
            <button
              onClick={() => setActiveCalculator('bmi')}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCalculator === 'bmi'
                  ? 'text-white bg-gradient-to-r from-[#00c4ff] to-[#0090db] shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              BMI
            </button>
          </div>
        </div>

        {/* Main Calculator Area */}
        <motion.div
          key={activeCalculator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl rounded-2xl border border-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {activeCalculator === 'calories' ? (
            <>
              {/* Calorie Calculator */}
              <div className="relative bg-gradient-to-r from-[#00c4ff]/10 via-transparent to-[#00c4ff]/10 p-6 border-b border-white/[0.05]">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#00c4ff] blur-3xl rounded-full opacity-20"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-[#00c4ff] to-[#0090db] p-2 rounded-lg shadow-lg">
                      <FireIcon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white font-display">Калкулатор за Калории</h2>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-[#00c4ff] focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 rounded-full transition-colors duration-300"
                    onClick={() => setShowInfo(!showInfo)}
                    aria-label={showInfo ? "Скрий информация" : "Покажи информация"}
                  >
                    <InformationCircleIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {showInfo && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 text-gray-300 text-sm p-4 bg-white/[0.03] rounded-lg font-body border border-white/[0.05]"
                  >
                    <p>Калкулаторът за калории използва формулата на Harris-Benedict за изчисляване на базовия метаболитен разход (BMR) и дневните калорийни нужди.</p>
                    <p className="mt-2">За постигане на различни цели се прилагат следните принципи:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li><span className="text-rose-400 font-medium">Калориен дефицит (наляво)</span>: Консумирайте по-малко калории от поддържащите за отслабване.</li>
                      <li><span className="text-emerald-400 font-medium">Поддържане (в средата)</span>: Консумирайте точно толкова калории, колкото изразходвате.</li>
                      <li><span className="text-[#00c4ff] font-medium">Калориен излишък (надясно)</span>: Консумирайте повече калории от поддържащите за качване на мускулна маса.</li>
                    </ul>
                  </motion.div>
                )}
                
                <form onSubmit={calculateCalories} className="space-y-6">
                  <div className="grid gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Пол</label>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => setGender('male')}
                          className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-accent ${
                            gender === 'male'
                              ? 'bg-gradient-to-r from-[#00c4ff] to-[#0090db] text-white shadow-[0_5px_15px_rgba(0,196,255,0.3)]'
                              : 'bg-white/[0.03] text-gray-300 border border-white/[0.05] hover:bg-white/[0.05]'
                          }`}
                        >
                          Мъж
                        </button>
                        <button
                          type="button"
                          onClick={() => setGender('female')}
                          className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-accent ${
                            gender === 'female'
                              ? 'bg-gradient-to-r from-[#00c4ff] to-[#0090db] text-white shadow-[0_5px_15px_rgba(0,196,255,0.3)]'
                              : 'bg-white/[0.03] text-gray-300 border border-white/[0.05] hover:bg-white/[0.05]'
                          }`}
                        >
                          Жена
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Възраст</label>
                        <div className="relative">
                          <input
                            type="number"
                            required
                            min="15"
                            max="100"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full py-3 px-4 pl-10 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                            placeholder="Години"
                          />
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            <ArrowPathIcon className="h-4 w-4" />
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Тегло (кг)</label>
                        <div className="relative">
                          <input
                            type="number"
                            required
                            min="40"
                            max="200"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full py-3 px-4 pl-10 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                            placeholder="Килограми"
                          />
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            <ScaleIcon className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Височина (см)</label>
                        <div className="relative">
                          <input
                            type="number"
                            required
                            min="140"
                            max="220"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full py-3 px-4 pl-10 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                            placeholder="Сантиметри"
                          />
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                            <ScaleIcon className="h-4 w-4" />
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Ниво на активност</label>
                        <select
                          value={activityLevel}
                          onChange={(e) => setActivityLevel(e.target.value)}
                          className="w-full py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                        >
                          <option value="1.2" className="bg-[#0B1120] text-white">Заседнал (малко или никакви упражнения)</option>
                          <option value="1.375" className="bg-[#0B1120] text-white">Леко активен (леки упражнения 1-3 дни/седмица)</option>
                          <option value="1.55" className="bg-[#0B1120] text-white">Умерено активен (умерени упражнения 3-5 дни/седмица)</option>
                          <option value="1.725" className="bg-[#0B1120] text-white">Много активен (тежки упражнения 6-7 дни/седмица)</option>
                          <option value="1.9" className="bg-[#0B1120] text-white">Изключително активен (физическа работа)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm font-medium mb-2 text-gray-300 font-body">
                        <span className="text-rose-400">Дефицит ({Math.abs(calorieAdjustment)}%)</span>
                        <span className={calorieAdjustment === 0 ? 'text-emerald-400' : 'text-gray-500'}>Поддържане</span>
                        <span className="text-[#00c4ff]">Излишък ({Math.abs(calorieAdjustment)}%)</span>
                      </div>
                      <div className="relative py-4 px-2">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded-full bg-gray-700/50">
                          <div 
                            style={{ 
                              width: calorieAdjustment < 0 
                                ? `${Math.abs(calorieAdjustment)/30 * 50}%` 
                                : '0%',
                              marginLeft: calorieAdjustment < 0
                                ? `${50 - (Math.abs(calorieAdjustment)/30 * 50)}%`
                                : '50%'
                            }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-rose-600 to-rose-400"
                          ></div>
                          <div 
                            style={{ 
                              width: calorieAdjustment > 0 
                                ? `${Math.abs(calorieAdjustment)/30 * 50}%` 
                                : '0%' 
                            }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#00c4ff] to-[#0090db]"
                          ></div>
                        </div>
                        
                        {/* Slider Track Labels */}
                        <div className="absolute w-full left-0 bottom-0 flex justify-between text-xs text-gray-500 px-1.5">
                          <span>-30%</span>
                          <span>0%</span>
                          <span>+30%</span>
                        </div>
                        
                        {/* Slider Handle */}
                        <div 
                          className="absolute cursor-grab active:cursor-grabbing"
                          style={{
                            left: `calc(${50 + (calorieAdjustment / 30) * 50}% - 8px)`,
                            top: '12px',
                          }}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-lg ring-2 ring-[#00c4ff]/50"></div>
                        </div>
                        
                        {/* Custom Slider - Transparent input on top for functionality */}
                        <input
                          type="range"
                          min="-30"
                          max="30"
                          step="5"
                          value={calorieAdjustment}
                          onChange={(e) => setCalorieAdjustment(Number(e.target.value))}
                          className="absolute top-0 left-0 w-full h-10 opacity-0 cursor-pointer z-10"
                        />
                      </div>
                      
                      {/* Current Value Label */}
                      <div className="text-center -mt-1">
                        <span className={`text-sm font-medium ${
                          calorieAdjustment < 0 
                            ? 'text-rose-400' 
                            : calorieAdjustment > 0 
                              ? 'text-[#00c4ff]' 
                              : 'text-emerald-400'
                        }`}>
                          {calorieAdjustment === 0 
                            ? 'Поддържане' 
                            : `${calorieAdjustment < 0 ? 'Дефицит' : 'Излишък'} ${Math.abs(calorieAdjustment)}%`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-8 py-3 rounded-lg relative overflow-hidden group bg-gradient-to-r from-[#00c4ff] to-[#0090db] text-white font-medium transition-all duration-300 transform hover:translate-y-[-2px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,196,255,0.4)] active:translate-y-0 focus:outline-none font-accent"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                      Изчисли Калориите
                    </button>
                  </div>
                </form>

                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6"
                  >
                    <div className="p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-sm">
                      <div className="text-center">
                        <h3 className="text-xl font-medium text-white mb-1 font-display">
                          {calorieAdjustment < 0 ? 'За Отслабване' : calorieAdjustment > 0 ? 'За Качване' : 'За Поддържане'}
                        </h3>
                        <h4 className="text-xs text-gray-400 mb-3">
                          {calorieAdjustment < 0 ? 'Weight Loss' : calorieAdjustment > 0 ? 'Weight Gain' : 'Maintenance'}
                        </h4>
                        <p className={`text-3xl font-bold font-display mb-1 ${
                          calorieAdjustment < 0 
                            ? 'text-rose-400' 
                            : calorieAdjustment > 0 
                              ? 'text-[#00c4ff]' 
                              : 'text-emerald-400'
                        }`}>
                          {results.adjusted} <span className="text-sm font-normal">кал</span>
                        </p>
                        <p className="text-sm text-gray-400 font-body">
                          {calorieAdjustment !== 0 
                            ? `${Math.abs(calorieAdjustment)}% ${calorieAdjustment < 0 ? 'дефицит' : 'излишък'} от поддържащите калории`
                            : 'Поддържащи калории'
                          }
                        </p>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <p className="text-xs text-gray-400 mb-1 font-body">Базов метаболизъм (BMR)</p>
                          <p className="text-lg font-semibold text-white font-display">{results.bmr} <span className="text-xs font-normal">кал</span></p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <p className="text-xs text-gray-400 mb-1 font-body">Поддържащи калории</p>
                          <p className="text-lg font-semibold text-white font-display">{results.maintenance} <span className="text-xs font-normal">кал</span></p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Educational Text */}
              <div className="p-6 border-t border-white/[0.05] bg-gradient-to-b from-transparent to-white/[0.02]">
                <h3 className="text-lg font-medium text-white mb-2 font-display">Как да използвате калориите?</h3>
                <p className="text-sm text-gray-300 font-body">
                  Калориите са единица за измерване на енергията. За постигане на различни фитнес цели е важно да разберете вашите калорийни нужди:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-300 font-body list-disc list-inside">
                  <li><span className="text-rose-400 font-medium">За отслабване</span>: Консумирайте по-малко калории отколкото изразходвате. Препоръчителен дефицит е между 10-25%.</li>
                  <li><span className="text-emerald-400 font-medium">За поддържане</span>: Консумирайте толкова калории, колкото изразходвате.</li>
                  <li><span className="text-[#00c4ff] font-medium">За качване на мускулна маса</span>: Консумирайте повече калории отколкото изразходвате, съчетано с тренировки със съпротивление.</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* BMI Calculator */}
              <BMICalculator />
              
              {/* Educational Text for BMI */}
              <div className="p-6 border-t border-white/[0.05] bg-gradient-to-b from-transparent to-white/[0.02]">
                <h3 className="text-lg font-medium text-white mb-2 font-display">Какво представлява BMI?</h3>
                <p className="text-sm text-gray-300 font-body">
                  Индексът на телесна маса (BMI) е метод за оценка на телесното тегло спрямо височината. Това е индикатор, а не директна мярка за телесните мазнини или цялостното здраве.
                </p>
                <p className="mt-2 text-sm text-gray-300 font-body">
                  Важно е да се отбележи, че BMI не отчита фактори като телесен състав, разпределение на мазнините, мускулна маса или костна структура. Атлети и хора с висока мускулна маса могат да имат по-висок BMI без повишен здравословен риск.
                </p>
                <p className="mt-2 text-sm text-gray-300 font-body">
                  Винаги консултирайте се с медицински специалист за цялостна оценка на вашето здраве.
                </p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default CalorieCalculator