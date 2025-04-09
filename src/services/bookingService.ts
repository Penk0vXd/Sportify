interface BookingData {
  workoutName: string;
  date: string;
  dayOfWeek: string;
  time: string;
  trainer: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  }
}

class BookingService {
  private GOOGLE_SCRIPT_URL: string;

  constructor() {
    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error('Google Script URL is not defined in environment variables');
    }
    this.GOOGLE_SCRIPT_URL = scriptUrl;
  }

  async createBooking(bookingData: BookingData): Promise<boolean> {
    if (!this.GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL is not configured');
      return false;
    }

    try {
      const response = await fetch(this.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      return true; // Since no-cors mode doesn't return response data
    } catch (error) {
      console.error('Booking failed:', error);
      return false;
    }
  }
}

export const bookingService = new BookingService();