import React, { createContext, useContext, useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailContextType {
  sendEmail: (templateId: string, templateParams: Record<string, unknown>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (templateId: string, templateParams: Record<string, unknown>) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status !== 200) {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while sending the email');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <EmailContext.Provider value={{ sendEmail, isLoading, error }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
}; 