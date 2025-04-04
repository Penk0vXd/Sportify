import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addDays, startOfWeek } from 'date-fns';
import { bg } from "date-fns/locale/bg";
import {
  CalendarDaysIcon,
  UserIcon,
  XMarkIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShareIcon,
  CalendarIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { bookingService } from '../services/bookingService';
import { emailService } from '../services/emailService';
import { createEvent } from 'ics';

// Analytics interface
interface Analytics {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
}

// Declare analytics globally - you'll need to initialize this in your app
declare global {
  interface Window {
    analytics?: Analytics;
  }
}

type WorkoutClass = {
  id?: string;
  name: string;
  time: string;
  trainer: string;
  trainerFullName: string;
  intensity?: 'low' | 'medium' | 'high';
  type: 'cardio' | 'strength' | 'flexibility' | 'dance';
  spots?: number;
  booked?: number;
};

type DaySchedule = {
  day: string;
  classes: WorkoutClass[];
};

const Schedule = () => {
  // Get current day index (0 = Monday, 6 = Sunday)
  const getCurrentDayIndex = () => {
    const today = new Date();
    // getDay() returns 0-6 where 0 is Sunday, but we want Monday to be 0
    const dayIndex = today.getDay();
    // Convert to our schedule array index (0 = Monday, 6 = Sunday)
    return dayIndex === 0 ? 6 : dayIndex - 1;
  };

  const [selectedDayIndex, setSelectedDayIndex] = useState(getCurrentDayIndex());
  const [selectedClass, setSelectedClass] = useState<WorkoutClass | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // When week offset changes, update selected day if needed
  useEffect(() => {
    if (weekOffset === 0) {
      // If we're on current week, set to current day
      setSelectedDayIndex(getCurrentDayIndex());
    } else {
      // If we're on a future week, set to Monday
      setSelectedDayIndex(0);
    }
  }, [weekOffset]);

  // Get current week dates
  const today = new Date();
  const weekStart = startOfWeek(addDays(today, weekOffset * 7), { weekStartsOn: 1 });
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const schedule: DaySchedule[] = [
  {
    day: 'ПОНЕДЕЛНИК',
    classes: [
      { time: '8:00', name: 'Пилатес', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'flexibility'},
      { time: '17:30', name: 'Body Pump', trainer: 'Марио', trainerFullName: 'Марио Белов', type: 'strength'},
      { time: '18:30', name: 'Body Fit', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio'},
      { time: '19:30', name: 'Пилатес', trainer: 'Ванина', trainerFullName: 'Ванина Маркова', type: 'flexibility'},
    ],
  },
  {
    day: 'ВТОРНИК',
    classes: [
      { time: '8:00', name: 'Body Fit', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio'},
      { time: '17:30', name: 'Body Combat', trainer: 'Марио', trainerFullName: 'Марио Белов', type: 'cardio'},
      { time: '18:30', name: 'Body Work', trainer: 'Ванина', trainerFullName: 'Ванина Маркова', type: 'strength'},
      { time: '19:30', name: 'Модерен балет', trainer: 'Яна', trainerFullName: 'Яна Чолакова', type: 'dance'},
    ],
  },
  {
    day: 'СРЯДА',
    classes: [
      { time: '8:00', name: 'Стречинг', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'flexibility'},
      { time: '17:30', name: 'Кръгова', trainer: 'Марио', trainerFullName: 'Марио Белов', type: 'strength'},
      { time: '18:30', name: 'Зумба', trainer: 'Ванина', trainerFullName: 'Ванина Маркова', type: 'dance'},
      { time: '19:30', name: 'Степ', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio'},
    ],
  },
  {
    day: 'ЧЕТВЪРТЪК',
    classes: [
      { time: '8:00', name: 'Body Sculpt', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'strength'},
      { time: '17:30', name: 'HIIT', trainer: 'Марио', trainerFullName: 'Марио Белов', type: 'cardio'},
      { time: '18:30', name: 'Пилатес', trainer: 'Ванина', trainerFullName: 'Ванина Маркова', type: 'flexibility'},
      { time: '19:30', name: 'Hip Hop Dance', trainer: 'Яна', trainerFullName: 'Яна Чолакова', type: 'dance'},
    ],
  },
  {
    day: 'ПЕТЪК',
    classes: [
      { time: '8:00', name: 'Пилатес', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'flexibility'},
      { time: '17:30', name: 'Body Sculpt', trainer: 'Марио', trainerFullName: 'Марио Белов', type: 'strength'},
      { time: '18:30', name: 'Booty&Abs', trainer: 'Ванина', trainerFullName: 'Ванина Маркова', type: 'strength'},
      { time: '19:30', name: 'Body Fit', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio'},
    ],
  },
  {
    day: 'СЪБОТА',
    classes: [
      { time: '8:00', name: 'Booty Step', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio'},
      { time: '17:30', name: 'Народни танци', trainer: 'Борислав', trainerFullName: 'Борислав Трифонов', type: 'dance'},
      { time: '18:30', name: 'Body Fit', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'cardio',},
    ],
  },
  {
    day: 'НЕДЕЛЯ',
    classes: [
      { time: '8:00', name: 'Кръгова', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'strength'},
      { time: '17:30', name: 'Народни танци', trainer: 'Борислав', trainerFullName: 'Борислав Трифонов', type: 'dance'},
      { time: '18:30', name: 'Пилатес', trainer: 'Мария', trainerFullName: 'Мария Андонова', type: 'flexibility'},
    ],
  },
]

  const validateBulgarianPhone = (phone: string) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it starts with 0 and has 9 more digits (total 10)
    // Or if it starts with 359 and has 9 more digits (total 12)
    const isValidFormat = 
      (cleanPhone.startsWith('0') && cleanPhone.length === 10) ||
      (cleanPhone.startsWith('359') && cleanPhone.length === 12);

    if (!isValidFormat) {
      return {
        isValid: false,
        message: 'Моля, въведете валиден български телефонен номер',
        formattedPhone: phone // Include formattedPhone even in error case
      };
    }

    // Format the phone number for Google Sheets
    let formattedPhone = cleanPhone;
    if (cleanPhone.startsWith('0')) {
      formattedPhone = '+359' + cleanPhone.substring(1);
    } else if (!cleanPhone.startsWith('+')) {
      formattedPhone = '+' + cleanPhone;
    }

    return {
      isValid: true,
      message: null,
      formattedPhone
    };
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBooking = async () => {
    // Reset states
    setErrorMessage(null);
    
    // Validate required fields
    if (!selectedClass || !selectedDate) {
      setErrorMessage('Моля, изберете тренировка.');
      return;
    }
    
    if (!bookingData.name.trim()) {
      setErrorMessage('Моля, въведете вашето име.');
      return;
    }
    
    if (!bookingData.phone.trim()) {
      setErrorMessage('Моля, въведете телефон за връзка.');
      return;
    }

    // Validate phone number
    const phoneValidation = validateBulgarianPhone(bookingData.phone);
    if (!phoneValidation.isValid) {
      setErrorMessage(phoneValidation.message || 'Невалиден телефонен номер');
      return;
    }

    // Validate email if provided
    if (bookingData.email && !validateEmail(bookingData.email)) {
      setErrorMessage('Моля, въведете валиден имейл адрес.');
      return;
    }

    try {
      setIsSubmitting(true);
      const dateStr = format(selectedDate, 'dd.MM.yyyy');
      const dayOfWeek = format(selectedDate, 'EEEE', { locale: bg }).toUpperCase();

      const success = await bookingService.createBooking({
        workoutName: selectedClass.name,
        date: dateStr,
        dayOfWeek: dayOfWeek,
        time: selectedClass.time,
        trainer: selectedClass.trainerFullName,
        contactInfo: {
          name: bookingData.name,
          phone: phoneValidation.formattedPhone,
          email: bookingData.email || ''
        }
      });

      if (success) {
        // Track successful booking
        window.analytics?.trackEvent('booking_created', {
          workoutName: selectedClass.name,
          date: dateStr,
          time: selectedClass.time,
          trainer: selectedClass.trainerFullName
        });

        // Send confirmation email if email is provided
        if (bookingData.email) {
          setIsSendingEmail(true);
          const emailSuccess = await emailService.sendBookingConfirmation({
            to_email: bookingData.email,
            to_name: bookingData.name,
            workout_name: selectedClass.name,
            workout_date: format(selectedDate, 'dd MMMM yyyy', { locale: bg }),
            workout_time: selectedClass.time,
            trainer_name: selectedClass.trainerFullName,
            phone: phoneValidation.formattedPhone
          });
          setEmailSent(emailSuccess);
          setIsSendingEmail(false);

          // Track email status
          window.analytics?.trackEvent('confirmation_email', {
            success: emailSuccess,
            workoutName: selectedClass.name
          });
        }

        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setShowModal(false);
          setSelectedClass(null);
          setBookingData({ name: '', phone: '', email: '' });
          setEmailSent(false);
        }, 5000);
      } else {
        setErrorMessage('Възникна грешка при записването. Моля, опитайте отново.');
      }
    } catch (error) {
      console.error('Booking failed:', error);
      setErrorMessage('Възникна грешка при записването. Моля, опитайте отново.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateCalendarFile = () => {
    if (!selectedClass || !selectedDate) return;

    const [hours, minutes] = selectedClass.time.split(':').map(Number);
    const startDate = new Date(selectedDate);
    startDate.setHours(hours, minutes);
    
    const endDate = new Date(startDate);
    endDate.setHours(hours + 1); // Assuming 1-hour duration

    const event = {
      start: [
        startDate.getFullYear(),
        startDate.getMonth() + 1,
        startDate.getDate(),
        startDate.getHours(),
        startDate.getMinutes()
      ] as [number, number, number, number, number],
      end: [
        endDate.getFullYear(),
        endDate.getMonth() + 1,
        endDate.getDate(),
        endDate.getHours(),
        endDate.getMinutes()
      ] as [number, number, number, number, number],
      title: `${selectedClass.name} с ${selectedClass.trainerFullName}`,
      description: `Тренировка ${selectedClass.name} със треньор ${selectedClass.trainerFullName}`,
      location: 'Sportify Fitness Center',
      url: window.location.href
    };

    createEvent(event, (error: Error | undefined, value: string) => {
      if (error) {
        console.error('Error generating calendar event:', error);
        return;
      }

      const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `sportify-${selectedClass.name}.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Track calendar download
      window.analytics?.trackEvent('calendar_download', {
        workoutName: selectedClass.name,
        date: format(selectedDate, 'dd.MM.yyyy'),
        time: selectedClass.time
      });
    });
  };

  const shareWorkout = () => {
    if (!selectedClass || !selectedDate) return;

    const shareData = {
      title: 'Тренировка в Sportify',
      text: `Присъединете се към мен за ${selectedClass.name} с ${selectedClass.trainerFullName} на ${format(selectedDate, 'dd.MM.yyyy')} в ${selectedClass.time}!`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => {
          // Track successful share
          window.analytics?.trackEvent('workout_shared', {
            workoutName: selectedClass.name,
            date: format(selectedDate, 'dd.MM.yyyy'),
            time: selectedClass.time
          });
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that don't support native sharing
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
      window.open(shareUrl, '_blank');
    }
  };

  const isTimeSlotPassed = (date: Date, time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const slotDate = new Date(date);
    slotDate.setHours(hours, minutes);
    return slotDate < new Date();
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 md:py-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-12 mt-8 sm:mt-12 md:mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 sm:mb-4">
            Седмична Програма
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Открийте своята перфектна тренировка
          </p>
        </div>

        {/* Week Navigation */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8 bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
            className="p-1 sm:p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </motion.button>

          <div className="text-center px-2">
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-white">
              {weekOffset === 0 ? 'Тази седмица' : 
               weekOffset === 1 ? 'Следваща седмица' :
               `След ${weekOffset} седмици`}
            </h2>
            <p className="text-xs sm:text-sm text-blue-300 mt-0.5 md:mt-1">
              {format(weekDates[0], 'd MMM', { locale: bg })} - {format(weekDates[6], 'd MMM', { locale: bg })}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="p-1 sm:p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </motion.button>
        </div>

        {/* Mobile Day Selector */}
        <div className="md:hidden mb-4 overflow-x-auto flex space-x-2 pb-2 -mx-2 px-2">
          {schedule.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDayIndex(index)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg ${
                selectedDayIndex === index
                  ? 'bg-blue-600/40 text-white'
                  : 'bg-white/10 text-blue-200'
              }`}
            >
              <div className="text-xs font-medium">{day.day.slice(0, 2)}</div>
              <div className="text-[10px] mt-0.5">
                {format(weekDates[index], 'd MMM', { locale: bg })}
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-white/20">
          {/* Days Header - Hide on Mobile */}
          <div className="hidden md:grid grid-cols-7 border-b border-white/20">
            {schedule.map((day, index) => (
              <div key={day.day} className="p-3 sm:p-4 text-center border-r border-white/20 last:border-r-0">
                <h3 className="text-base sm:text-lg font-semibold text-white">{day.day}</h3>
                <p className="text-xs sm:text-sm text-blue-300">
                  {format(weekDates[index], 'd MMM', { locale: bg })}
                </p>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="md:grid md:grid-cols-7">
            {/* Mobile View */}
            <div className="md:hidden">
              {['8:00', '17:30', '18:30', '19:30'].map((timeSlot) => {
                const workout = schedule[selectedDayIndex]?.classes.find(w => w.time === timeSlot);
                const date = weekDates[selectedDayIndex];
                const isPastDay = date < new Date(new Date().setHours(0, 0, 0, 0));
                const isPassedWorkout = isPastDay || (workout && isTimeSlotPassed(date, workout.time));
                const isFull = workout && workout.spots && workout.booked ? workout.spots <= workout.booked : false;

                return (
                  <div key={timeSlot} className="p-2 border-b border-white/20 last:border-b-0">
                    {workout ? (
                      <motion.button
                        whileHover={{ scale: isPassedWorkout || isFull ? 1 : 1.02 }}
                        className={`w-full rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-200 text-left
                          ${isPassedWorkout 
                            ? 'bg-blue-800/30 cursor-not-allowed' 
                            : isFull
                            ? 'bg-blue-800/30 cursor-not-allowed'
                            : 'bg-blue-600/40 hover:bg-blue-500/50 cursor-pointer active:bg-blue-500/60'
                          }`}
                        onClick={() => {
                          if (!isPassedWorkout && !isFull) {
                            setSelectedClass(workout);
                            setSelectedDate(date);
                            setShowModal(true);
                          }
                        }}
                        disabled={isPassedWorkout || isFull}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs sm:text-sm text-blue-200 mb-1">{workout.time}</p>
                            <h4 className="text-sm sm:text-base font-medium text-white">{workout.name}</h4>
                            <div className="flex items-center text-xs sm:text-sm text-blue-200 mt-1">
                              <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              <span>{workout.trainer}</span>
                            </div>
                          </div>
                          {!isPassedWorkout && !isFull && (
                            <span className="text-[10px] sm:text-xs text-blue-200 flex items-center">
                              Запиши се
                              <ChevronRightIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" />
                            </span>
                          )}
                        </div>
                      </motion.button>
                    ) : (
                      <div className="h-16 sm:h-20 rounded-lg sm:rounded-xl border border-dashed border-blue-500/20 flex items-center justify-center">
                        <span className="text-xs sm:text-sm text-blue-300/30">{timeSlot}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop View */}
            <div className="hidden md:contents">
              {['8:00', '17:30', '18:30', '19:30'].map((timeSlot) => (
                <div key={timeSlot} className="contents">
                  {schedule.map((day, dayIndex) => {
                    const date = weekDates[dayIndex];
                    const workout = day.classes.find(w => w.time === timeSlot);
                    const isPastDay = date < new Date(new Date().setHours(0, 0, 0, 0));
                    const isPassedWorkout = isPastDay || (workout && isTimeSlotPassed(date, workout.time));
                    const isFull = workout && workout.spots && workout.booked ? workout.spots <= workout.booked : false;

                    return (
                      <div key={`${day.day}-${timeSlot}`} className="p-1.5 sm:p-2 border-b border-r border-white/20 last:border-r-0">
                        {workout ? (
                          <motion.button
                            whileHover={{ scale: isPassedWorkout || isFull ? 1 : 1.02 }}
                            className={`w-full rounded-lg sm:rounded-xl p-2 sm:p-3 h-full transition-all duration-200 text-left
                              ${isPassedWorkout 
                                ? 'bg-blue-800/30 cursor-not-allowed' 
                                : isFull
                                ? 'bg-blue-800/30 cursor-not-allowed'
                                : 'bg-blue-600/40 hover:bg-blue-500/50 cursor-pointer active:bg-blue-500/60'
                              }`}
                            onClick={() => {
                              if (!isPassedWorkout && !isFull) {
                                setSelectedClass(workout);
                                setSelectedDate(date);
                                setShowModal(true);
                              }
                            }}
                            disabled={isPassedWorkout || isFull}
                          >
                            <div className="flex flex-col h-full">
                              <div className="mb-2">
                                <p className="text-xs sm:text-sm text-blue-200 mb-1">{workout.time}</p>
                                <h4 className="text-sm sm:text-base font-medium text-white">{workout.name}</h4>
                                <div className="flex items-center text-xs sm:text-sm text-blue-200 mt-1">
                                  <UserIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                  <span>{workout.trainer}</span>
                                </div>
                              </div>

                              {!isPassedWorkout && !isFull && (
                                <div className="mt-auto">
                                  <span className="text-[10px] sm:text-xs text-blue-200 flex items-center">
                                    Запиши се
                                    <ChevronRightIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" />
                                  </span>
                                </div>
                              )}
                            </div>
                          </motion.button>
                        ) : (
                          <div className="h-full min-h-[90px] sm:min-h-[100px] rounded-lg sm:rounded-xl border border-dashed border-blue-500/20 flex items-center justify-center">
                            <span className="text-xs sm:text-sm text-blue-300/30">{timeSlot}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100] touch-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowModal(false);
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 w-full max-w-md border border-blue-500/20 shadow-xl relative touch-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {selectedClass.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-300">
                    {selectedDate && format(selectedDate, 'dd MMMM', { locale: bg })} • {selectedClass.time}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors -mr-1.5 sm:-mr-2 -mt-1.5 sm:-mt-2"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Име
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Вашето име"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0888 123 456"
                  />
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                    Формат: 0888 123 456 или +359 888 123 456
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                    Имейл
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Вашият имейл"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg border border-white/20 text-sm sm:text-base text-white hover:bg-white/10 transition-colors disabled:opacity-50"
                >
                  Отказ
                </button>
                <button
                  onClick={handleBooking}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-sm sm:text-base text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 relative"
                >
                  {isSubmitting ? (
                    <>
                      <span className="opacity-0">Запиши се</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    </>
                  ) : (
                    'Запиши се'
                  )}
                </button>
              </div>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 flex items-center justify-center bg-slate-900/95 rounded-lg sm:rounded-xl md:rounded-2xl"
                  >
                    <div className="text-center px-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <CheckIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        Успешна резервация!
                      </h3>
                      <div className="text-gray-300 space-y-2 mb-4">
                        <p className="font-medium text-base sm:text-lg">{selectedClass?.name}</p>
                        <p className="text-sm sm:text-base">{selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: bg })} • {selectedClass?.time}</p>
                        <p className="text-sm sm:text-base">Треньор: {selectedClass?.trainerFullName}</p>
                        {bookingData.email && (
                          <div className="mt-2 flex items-center justify-center space-x-2">
                            <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                              {isSendingEmail ? 'Изпращане на имейл...' :
                               emailSent ? 'Изпратихме потвърждение на имейла Ви' :
                               'Грешка при изпращане на имейл'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-center space-x-4">
                        <button
                          onClick={generateCalendarFile}
                          className="flex items-center px-3 sm:px-4 py-2 rounded-lg bg-blue-600/40 hover:bg-blue-500/50 transition-colors text-white text-xs sm:text-sm"
                        >
                          <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Добави в календар
                        </button>
                        <button
                          onClick={shareWorkout}
                          className="flex items-center px-3 sm:px-4 py-2 rounded-lg bg-blue-600/40 hover:bg-blue-500/50 transition-colors text-white text-xs sm:text-sm"
                        >
                          <ShareIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Сподели
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CheckIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

export default Schedule;