import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScaleIcon, InformationCircleIcon, ChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface BMIRange {
  category: string;
  range: string;
  color: string;
  colorClass: string;
  description: string;
}

const BMICalculator = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const bmiRanges: BMIRange[] = [
    {
      category: 'Поднормено тегло',
      range: '< 18.5',
      color: 'text-blue-400',
      colorClass: 'from-blue-400 to-blue-500',
      description: 'Може да е необходима консултация с лекар за поддържане на здравословно тегло.'
    },
    {
      category: 'Нормално тегло',
      range: '18.5 - 24.9',
      color: 'text-green-400',
      colorClass: 'from-green-400 to-green-500',
      description: 'Поддържайте балансирано хранене и редовна физическа активност.'
    },
    {
      category: 'Наднормено тегло',
      range: '25 - 29.9',
      color: 'text-yellow-400',
      colorClass: 'from-yellow-400 to-yellow-500',
      description: 'Умерени промени в диетата и повече физическа активност могат да помогнат.'
    },
    {
      category: 'Затлъстяване I степен',
      range: '30 - 34.9',
      color: 'text-orange-400',
      colorClass: 'from-orange-400 to-orange-500',
      description: 'Консултирайте се с лекар за промени в начина на живот и хранене.'
    },
    {
      category: 'Затлъстяване II степен',
      range: '35 - 39.9',
      color: 'text-red-400',
      colorClass: 'from-red-400 to-red-500',
      description: 'Препоръчва се консултация с лекар за планиране на здравословен режим.'
    },
    {
      category: 'Затлъстяване III степен',
      range: '≥ 40',
      color: 'text-red-600',
      colorClass: 'from-red-600 to-red-700',
      description: 'Необходима е медицинска консултация и план за намаляване на здравните рискове.'
    }
  ];

  const calculateBMI = () => {
    if (weight && height) {
      // Convert height from cm to m
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBMI(parseFloat(calculatedBMI.toFixed(1)));
    } else {
      setBMI(null);
    }
  };

  const getBMICategory = (): BMIRange | null => {
    if (bmi === null) return null;
    
    if (bmi < 18.5) return bmiRanges[0];
    if (bmi < 25) return bmiRanges[1];
    if (bmi < 30) return bmiRanges[2];
    if (bmi < 35) return bmiRanges[3];
    if (bmi < 40) return bmiRanges[4];
    return bmiRanges[5];
  };

  const category = getBMICategory();

  return (
    <div className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl rounded-2xl border border-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
      {/* Header with glow effect */}
      <div className="relative bg-gradient-to-r from-[#00c4ff]/10 via-transparent to-[#00c4ff]/10 p-6 border-b border-white/[0.05]">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#00c4ff] blur-3xl rounded-full opacity-20"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-[#00c4ff] to-[#0090db] p-2 rounded-lg shadow-lg">
              <ChartBarIcon className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-white font-display">BMI Калкулатор</h2>
          </div>
          <button 
            className="text-gray-400 hover:text-[#00c4ff] focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 rounded-full transition-colors duration-300"
            onClick={() => setShowInfo(!showInfo)}
            aria-label={showInfo ? "Скрий информация за BMI" : "Покажи информация за BMI"}
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
            <p>Индексът на телесна маса (BMI) е метод за оценка на телесното тегло спрямо височината. Това е индикатор, а не директна мярка за телесните мазнини и здравния статус.</p>
            <p className="mt-2">BMI не взема предвид фактори като мускулна маса, плътност на костите и индивидуални различия. Консултирайте се с лекар за цялостна оценка на вашето здраве.</p>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-300 font-body mb-2">
              Тегло (кг)
            </label>
            <div className="relative">
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : '')}
                className="w-full py-3 px-4 pl-10 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                placeholder="Въведете тегло"
                min="30"
                max="250"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                <ScaleIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
          
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-300 font-body mb-2">
              Височина (см)
            </label>
            <div className="relative">
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : '')}
                className="w-full py-3 px-4 pl-10 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c4ff]/50 focus:border-transparent transition-all duration-300 font-body"
                placeholder="Въведете височина"
                min="120"
                max="250"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                <ArrowPathIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
        
        <button
          onClick={calculateBMI}
          className="w-full px-8 py-3 rounded-lg relative overflow-hidden group bg-gradient-to-r from-[#00c4ff] to-[#0090db] text-white font-medium transition-all duration-300 transform hover:translate-y-[-2px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,196,255,0.4)] active:translate-y-0 focus:outline-none font-accent mb-6"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
          Изчисли BMI
        </button>

        {bmi !== null && (
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category?.colorClass} flex items-center justify-center shadow-lg mr-4`}>
                  <span className="text-2xl font-bold text-white">{bmi}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white font-display">{category?.category}</h3>
                  <div className="flex space-x-1 items-center">
                    <span className={`text-sm ${category?.color}`}>BMI: {bmi}</span>
                    <span className="text-gray-400 text-xs">• {category?.range}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4 font-body border-l-2 border-white/10 pl-3">{category?.description}</p>
              
              <div className="mt-4">
                <div className="relative h-3 bg-gray-700/30 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-green-400 to-red-600"
                    style={{ width: '100%' }}
                  />
                  
                  <div 
                    className="absolute top-0 h-7 w-1.5 bg-white -translate-y-2"
                    style={{ 
                      left: `${Math.min(Math.max((bmi / 50) * 100, 0), 100)}%`,
                      transform: 'translateX(-50%)'
                    }}
                  />
                  
                  <div
                    className="absolute top-full mt-1.5 -translate-x-1/2 text-sm font-medium text-white bg-black/30 px-2 py-0.5 rounded"
                    style={{ 
                      left: `${Math.min(Math.max((bmi / 50) * 100, 0), 100)}%`
                    }}
                  >
                    {bmi}
                  </div>
                </div>
                
                <div className="flex justify-between mt-6 text-xs text-gray-400 font-body">
                  <span className="text-blue-400">Поднормено<br/>&lt;18.5</span>
                  <span className="text-green-400">Нормално<br/>18.5-24.9</span>
                  <span className="text-yellow-400">Наднормено<br/>25-29.9</span>
                  <span className="text-red-400">Затлъстяване<br/>&gt;30</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div className="grid grid-cols-3 gap-4">
          {bmiRanges.slice(0, 3).map((range, index) => (
            <div key={index} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${range.color.replace('text', 'bg')}`}></div>
              <p className={`text-xs font-medium ${range.color} mb-0.5`}>{range.category}</p>
              <p className="text-xs text-gray-400">{range.range}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {bmiRanges.slice(3).map((range, index) => (
            <div key={index} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${range.color.replace('text', 'bg')}`}></div>
              <p className={`text-xs font-medium ${range.color} mb-0.5`}>{range.category}</p>
              <p className="text-xs text-gray-400">{range.range}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;