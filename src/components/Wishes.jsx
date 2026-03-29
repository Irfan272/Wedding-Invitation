import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const dummyWishes = [
  { name: "Andi & Keluarga", message: "Selamat menempuh hidup baru! Semoga samawa.", time: "2 jam yang lalu" },
  { name: "Budi Santoso", message: "Waktu cepat berlalu. Doa terbaik untuk kalian berdua.", time: "5 jam yang lalu" },
  { name: "Siti Nurhaliza", message: "Semoga bahagia selalu dan dilancarkan rezekinya.", time: "1 hari yang lalu" },
  { name: "Rina & Suami", message: "Selamat ya! Semoga lekas diberi momongan.", time: "1 hari yang lalu" },
  { name: "Fajar", message: "Alhamdulillah sah! Selamat bro.", time: "2 hari yang lalu" },
  { name: "Ayu", message: "Cantik banget! Happy wedding yaa.", time: "2 hari yang lalu" },
  { name: "Reza", message: "Barakallah lakuma wa baraka alaikuma wa jama'a bainakuma fii khair.", time: "3 hari yang lalu" }
];

export default function Wishes() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const totalPages = Math.ceil(dummyWishes.length / itemsPerPage);
  const currentWishes = dummyWishes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const nextPage = () => setCurrentPage(p => Math.min(totalPages, p + 1));
  const prevPage = () => setCurrentPage(p => Math.max(1, p - 1));

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4">Wishes & Prayers</h2>
          <p className="text-slate-500 font-light">Doa ucapan selamat dari orang-orang tersayang</p>
        </motion.div>

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {currentWishes.map((wish, i) => (
                <div key={i} className="bg-blue-50/20 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center text-xl shrink-0 font-serif shadow-md border-2 border-slate-100">
                      {wish.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-2">
                        <h4 className="font-semibold text-slate-800 tracking-wide text-sm">{wish.name}</h4>
                        <span className="text-[10px] text-slate-400 font-light uppercase tracking-widest">{wish.time}</span>
                      </div>
                      <p className="text-slate-600 font-light text-sm leading-relaxed italic">"{wish.message}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold hover:border-gold disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:border-slate-200 disabled:hover:bg-transparent transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <span className="text-slate-400 font-serif text-sm px-4">
              <span className="text-gold font-bold text-lg">{currentPage}</span> / {totalPages}
            </span>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold hover:border-gold disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:border-slate-200 disabled:hover:bg-transparent transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
