import { motion } from 'framer-motion';

export default function CoupleProfiles({ couple }) {
  if (!couple) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4">Groom & Bride</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full md:w-5/12 group"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mb-8 relative">
              <img 
                src={couple.groom.image || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                alt={couple.groom.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-800 mb-3 group-hover:text-gold transition-colors duration-300">{couple.groom.name}</h3>
            <p className="text-slate-500 font-light tracking-wide">{couple.groom.childOf}</p>
          </motion.div>

          {/* Center 'And' */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full md:w-2/12 flex justify-center py-6 md:py-0"
          >
            <span className="text-7xl md:text-8xl font-script text-gold drop-shadow-sm opacity-80">&</span>
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full md:w-5/12 group"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl mb-8 relative">
              <img 
                src={couple.bride.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                alt={couple.bride.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-800 mb-3 group-hover:text-gold transition-colors duration-300">{couple.bride.name}</h3>
            <p className="text-slate-500 font-light tracking-wide">{couple.bride.childOf}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
