import { motion } from 'framer-motion';

export default function StoryIntro({ couple, quote, eventDate }) {
  if (!couple || !quote) return null;

  return (
    <section className="relative w-full md:min-h-screen flex flex-col md:flex-row bg-slate-50 overflow-hidden">
      {/* Left Column - Image & Names */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent"></div>
        </motion.div>
        
        <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-script mb-3 drop-shadow-md"
          >
            {couple.groom.name.split(' ')[0]} & {couple.bride.name.split(' ')[0]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-sm md:text-lg tracking-[0.3em] font-light text-blue-100 uppercase"
          >
            {new Date(eventDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
          </motion.p>
        </div>
      </div>

      {/* Right Column - Quote */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen flex items-center justify-center p-10 md:p-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-lg"
        >
          <h3 className="text-gold font-serif text-2xl mb-8 tracking-widest">{quote.title}</h3>
          <p className="text-slate-600 font-light leading-loose text-lg md:text-xl italic">
            "{quote.text}"
          </p>
          <div className="mt-10 flex justify-center">
            <span className="block w-20 h-px bg-gold/50"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
