import { useState } from 'react'
import { motion } from 'framer-motion'

const CalorieCalculator = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('1.2')
  const [results, setResults] = useState<{
    bmr: number
    maintenance: number
    weightLoss: number
    weightGain: number
  } | null>(null)

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Harris-Benedict BMR Formula
    let bmr = gender === 'male'
      ? 88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))
      : 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))

    const maintenance = Math.round(bmr * Number(activityLevel))
    
    setResults({
      bmr: Math.round(bmr),
      maintenance,
      weightLoss: Math.round(maintenance * 0.8), // 20% deficit
      weightGain: Math.round(maintenance * 1.15) // 15% surplus
    })
  }

  return (
    <div className="relative min-h-screen py-16 px-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00c4ff]/20 to-transparent blur-3xl transform rotate-12 opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#00c4ff]/20 to-transparent blur-3xl transform -rotate-12 opacity-30" />
      </div>

      <div className="container mx-auto max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Калкулатор за Калории
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            Изчислете своите дневни калорийни нужди според вашите цели
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/[0.05] shadow-[0_0_20px_rgba(0,196,255,0.05)]"
        >
          <form onSubmit={calculateCalories} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Пол</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-accent ${
                      gender === 'male'
                        ? 'bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] text-white shadow-[0_8px_16px_rgba(0,196,255,0.2)]'
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
                        ? 'bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] text-white shadow-[0_8px_16px_rgba(0,196,255,0.2)]'
                        : 'bg-white/[0.03] text-gray-300 border border-white/[0.05] hover:bg-white/[0.05]'
                    }`}
                  >
                    Жена
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Възраст</label>
                <input
                  type="number"
                  required
                  min="15"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="Години"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Тегло</label>
                <input
                  type="number"
                  required
                  min="40"
                  max="200"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="Килограми"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300 font-body">Височина</label>
                <input
                  type="number"
                  required
                  min="140"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="Сантиметри"
                />
              </div>

              <div className="md:col-span-2">
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
                  <option value="1.9" className="bg-[#0B1120] text-white">Изключително активен (много тежки упражнения, физическа работа)</option>
                </select>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#00c4ff] to-[#00a6d9] text-white font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(0,196,255,0.2)] active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:ring-offset-2 focus:ring-offset-[#0B1120] font-accent"
              >
                Изчисли Калориите
              </button>
            </div>
          </form>

          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-rose-500/10 to-transparent p-6 rounded-2xl border border-rose-500/10">
                <h3 className="font-medium text-white mb-2 font-display">За Отслабване</h3>
                <p className="text-3xl font-bold text-rose-400 font-display">
                  {results.weightLoss} кал
                </p>
                <p className="text-sm text-gray-400 mt-2 font-body">
                  20% дефицит от поддържащите калории
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-6 rounded-2xl border border-emerald-500/10">
                <h3 className="font-medium text-white mb-2 font-display">За Поддържане</h3>
                <p className="text-3xl font-bold text-emerald-400 font-display">
                  {results.maintenance} кал
                </p>
                <p className="text-sm text-gray-400 mt-2 font-body">
                  Необходими калории за поддържане на теглото
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#00c4ff]/10 to-transparent p-6 rounded-2xl border border-[#00c4ff]/10">
                <h3 className="font-medium text-white mb-2 font-display">За Качване</h3>
                <p className="text-3xl font-bold text-[#00c4ff] font-display">
                  {results.weightGain} кал
                </p>
                <p className="text-sm text-gray-400 mt-2 font-body">
                  15% излишък от поддържащите калории
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default CalorieCalculator