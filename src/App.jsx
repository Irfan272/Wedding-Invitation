import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data
import data from './data/data.json';

// Components
import CoverScreen from './components/CoverScreen';
import AudioPlayer from './components/AudioPlayer';
import StoryIntro from './components/StoryIntro';
import CoupleProfiles from './components/CoupleProfiles';
import EventDetails from './components/EventDetails';
import LoveStoryTimeline from './components/LoveStoryTimeline';
import Gallery from './components/Gallery';
import DigitalGift from './components/DigitalGift';
import RSVP from './components/RSVP';
import Wishes from './components/Wishes';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-gold selection:text-white">
      {/* Cover Screen Overlay */}
      <CoverScreen 
        data={data} 
        isOpened={isOpened} 
        onOpen={handleOpenInvitation} 
      />

      {/* Main Content (revealed after cover opens) */}
      <ErrorBoundary>
        <AnimatePresence>
          {isOpened && (
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <StoryIntro couple={data.couple} quote={data.quote} eventDate={data.event.date} />
              <CoupleProfiles couple={data.couple} />
              <EventDetails event={data.event} />
              <LoveStoryTimeline story={data.loveStory} />
              <Gallery images={data.gallery} />
              <DigitalGift gift={data.gift} />
              <RSVP />
              <Wishes />
              
              {/* Elegant Footer */}
              <footer className="py-16 bg-slate-900 border-t border-slate-800 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-script text-white mb-3 tracking-wide">{data.couple.groom.name.split(' ')[0]} <span className="text-gold">&</span> {data.couple.bride.name.split(' ')[0]}</h2>
                  <p className="text-slate-400 font-light text-sm mb-8 italic max-w-sm mx-auto">"Terima kasih atas doa dan restu yang telah diberikan kepada kami."</p>
                  <div className="flex justify-center mb-8">
                    <span className="w-20 h-px bg-slate-800"></span>
                  </div>
                  <p className="text-slate-500 text-xs tracking-widest uppercase font-semibold">© 2026 Crafted with Love</p>
                </div>
              </footer>
            </motion.main>
          )}
        </AnimatePresence>
      </ErrorBoundary>

      {/* Floating Audio Player */}
      <ErrorBoundary>
        <AnimatePresence>
          {isOpened && (
            <AudioPlayer 
              audioUrl={data.music.url} 
              isPlaying={isPlaying} 
              onToggle={toggleAudio} 
            />
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}

export default App;
