import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-4 md:gap-8 mb-16">
      {Object.keys(timeLeft).length ? Object.keys(timeLeft).map((interval, i) => (
        <motion.div 
          key={interval}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center bg-white/90 p-4 rounded-xl shadow-lg border border-white/50 w-20 md:w-28"
        >
          <span className="text-3xl md:text-5xl font-serif text-gold mb-1">{timeLeft[interval]}</span>
          <span className="text-xs md:text-sm text-slate-500 uppercase tracking-widest">{interval}</span>
        </motion.div>
      )) : <p className="text-2xl font-script text-gold">Acara Sedang Berlangsung!</p>}
    </div>
  );
};

export default function EventDetails({ event }) {
  if (!event) return null;

  const EventCard = ({ title, data, delay }) => (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group bg-white/70 hover:bg-white/90 transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
      <h3 className="text-3xl font-script text-gold mb-8 relative z-10">{title}</h3>
      
      <div className="space-y-6 relative z-10">
        <div className="flex items-center justify-center gap-3 text-slate-700">
          <FaCalendarAlt className="text-gold" />
          <span className="font-medium text-lg">{data.date}</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-slate-700">
          <FaClock className="text-gold" />
          <span className="font-medium text-lg">{data.time}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-slate-700 mt-4">
          <FaMapMarkerAlt className="text-gold text-xl" />
          <span className="font-medium text-lg">{data.location}</span>
        </div>
      </div>

      <a 
        href={data.mapsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block mt-8 px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-gold transition-colors duration-300 shadow-xl relative z-10"
      >
        Buka Google Maps
      </a>
    </motion.div>
  );

  return (
    <section className="py-24 bg-blue-50/30 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4">Save The Date</h2>
          <p className="text-slate-500 font-light max-w-lg mx-auto">Kami berharap kehadiran Bapak/Ibu/Saudara/i untuk memberikan doa restu pada acara kami.</p>
        </motion.div>

        <Countdown targetDate={event.date} />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <EventCard title="Akad Nikah" data={event.akad} delay={0.2} />
          <EventCard title="Resepsi" data={event.resepsi} delay={0.4} />
        </div>
      </div>
    </section>
  );
}
