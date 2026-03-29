import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function LoveStoryTimeline({ story }) {
  if (!story || story.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4">Our Love Story</h2>
          <p className="text-slate-500 font-light">Perjalanan cerita cinta kami hingga mengikat janji suci.</p>
        </motion.div>

        <div className="relative border-l-2 border-gold/30 md:border-l-0 md:flex md:flex-col md:items-center">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gold/30 -translate-x-1/2"></div>
          
          {story.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative pl-8 md:pl-0 mb-12 md:mb-24 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:self-start md:text-right' : 'md:pl-16 md:self-end md:text-left'} group`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 left-[-11px] md:left-auto ${isEven ? 'md:right-[-26px]' : 'md:left-[-26px]'} w-6 h-6 bg-white border-4 border-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.3)] z-10 transition-transform group-hover:scale-150 duration-300`}>
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                </div>

                <div className="glass p-6 md:p-8 rounded-2xl border-t-4 border-t-gold shadow-lg hover:shadow-2xl transition-all duration-300 bg-blue-50/20 hover:bg-blue-50/60 hover:-translate-y-2">
                  <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <FaHeart className="text-gold/60 text-sm hidden md:block animate-pulse" />
                    <span className="text-gold font-serif font-bold tracking-widest text-lg">{item.date}</span>
                    <FaHeart className="text-gold/60 text-sm md:hidden animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-serif text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
