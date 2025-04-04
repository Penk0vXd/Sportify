import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

interface BookingEmailData {
  to_email: string;
  to_name: string;
  workout_name: string;
  workout_date: string;
  workout_time: string;
  trainer_name: string;
  phone?: string;
}

const validateConfig = () => {
  const missingVars = [];
  
  if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id') {
    missingVars.push('VITE_EMAILJS_SERVICE_ID');
  }
  if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'your_template_id') {
    missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  }
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'your_public_key') {
    missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  }

  if (missingVars.length > 0) {
    throw new Error(
      `EmailJS configuration error: Missing or invalid environment variables: ${missingVars.join(', ')}. ` +
      'Please check your .env file and ensure all EmailJS credentials are properly set.'
    );
  }
};

export const emailService = {
  sendBookingConfirmation: async (data: BookingEmailData): Promise<boolean> => {
    try {
      validateConfig();

      console.log('Attempting to send confirmation email:', {
        client: data.to_email,
        name: data.to_name,
        workout: data.workout_name,
        date: data.workout_date,
        time: data.workout_time,
        trainer: data.trainer_name
      });

      // Send confirmation to client
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: data.to_email,
          to_name: data.to_name,
          workout_name: data.workout_name,
          workout_date: data.workout_date,
          workout_time: data.workout_time,
          trainer_name: data.trainer_name,
          phone: data.phone || 'Не е предоставен',
          booking_time: new Date().toLocaleString('bg-BG', { timeZone: 'Europe/Sofia' })
        },
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log('Email sent successfully');
        return true;
      } else {
        console.error('Email sending failed:', response.status);
        return false;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to send email:', error.message);
      } else {
        console.error('Failed to send email:', error);
      }
      return false;
    }
  },

  init: () => {
    try {
      validateConfig();
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to initialize EmailJS:', error.message);
      } else {
        console.error('Failed to initialize EmailJS:', error);
      }
    }
  }
}; 