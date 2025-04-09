import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { EmailProvider } from './context/EmailContext'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/SEO'
import StructuredData from './components/StructuredData'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Exercises from './pages/Exercises'
import Schedule from './pages/Schedule'
import CalorieCalculator from './pages/CalorieCalculator'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import './index.css'

function App() {
  useEffect(() => {
    // Initialize theme
    const theme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    
    // Initialize email service
    // This is where you would initialize your email service
  }, [])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <EmailProvider>
          <Router>
            <ScrollToTop />
            <SEO />
            <StructuredData 
              type="WebSite"
              data={{
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://sportify-bulgaria.com/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              }}
            />
            <StructuredData 
              type="Organization"
              data={{
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+359879 069 966',
                  contactType: 'customer service'
                }
              }}
            />
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/workouts" element={<Workouts />} />
                  <Route path="/exercises" element={<Exercises />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/calorie-calculator" element={<CalorieCalculator />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-use" element={<TermsOfUse />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </EmailProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
