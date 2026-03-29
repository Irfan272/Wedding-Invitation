import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function CoverScreen({ data, onOpen, isOpened }) {
  if (!data) return null;
  const { groom, bride } = data.couple;
  
  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-900/40 bg-cover bg-center bg-no-repeat overflow-hidden text-white"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 tracking-widest text-sm uppercase text-blue-100 font-semibold"
            >
              The Wedding Of
            </motion.div>
            
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-script mb-12 text-white drop-shadow-lg text-center leading-tight"
            >
              {groom.name} <br className="md:hidden" /><span className="text-gold hidden md:inline"> & </span> <span className="md:hidden text-3xl my-2 block text-gold">&</span> {bride.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 w-full max-w-sm border border-white/20 shadow-2xl"
            >
              <p className="text-sm font-light mb-3 text-blue-100">Kepada Bapak/Ibu/Sdr/i</p>
              <p className="font-semibold text-2xl mb-2 font-serif tracking-wide">{data.guest.name}</p>
              <p className="text-xs text-blue-200 mt-4 italic opacity-80">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-semibold text-white transition-all duration-300 bg-gold rounded-full hover:bg-gold-dark shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_30px_rgba(217,119,6,0.8)] focus:outline-none"
            >
              <FaHeart className="mr-3 animate-pulse" />
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
