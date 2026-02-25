import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AIChatbot from './components/AIChatbot';
import ActivityToast from './components/ActivityToast';
import SmartAssistant from './components/SmartAssistant';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white prevent-scroll-x">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* AI Automations */}
      <AIChatbot />
      <ActivityToast />
      <SmartAssistant />
    </div>
  );
}

export default App;
