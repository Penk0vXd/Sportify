import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component scrolls the window to the top when:
 * 1. The route changes (user navigates to a new page)
 * 2. The component mounts (page refresh)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // UseLayoutEffect runs synchronously after DOM mutations
  // This ensures scroll happens before browser paint
  useLayoutEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
  }, [pathname]);

  // Also use regular useEffect as a fallback
  useEffect(() => {
    // Force scroll on next tick to handle any delays
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop; 