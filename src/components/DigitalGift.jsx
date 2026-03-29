import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';

export default function DigitalGift({ gift }) {
  if (!gift) return null;

  // Normalize to array to support multiple bank accounts
  const gifts = Array.isArray(gift) ? gift : [gift];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 md:translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-6 drop-shadow-sm">Wedding Gift</h2>
          <p className="text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
            Doa dan restu Anda merupakan karunia yang sangat berarti bagi kami.
            Dan jika memberi adalah tanda kasih, Anda dapat berbagi kasih dengan kami.
          </p>
        </motion.div>

        <div className={`grid gap-8 justify-center max-w-4xl mx-auto ${gifts.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {gifts.map((item, index) => (
            <GiftCard key={index} gift={item} index={index} />
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 w-full text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-400 font-light italic">Terima kasih atas doa dan restu Anda.</p>
        </div>
      </div>
    </section>
  );
}

function GiftCard({ gift, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
      viewport={{ once: true }}
      className="glass border-none !rounded-3xl p-8 shadow-2xl relative group overflow-hidden bg-white/70 w-full max-w-lg mx-auto"
    >
      {/* Card Accent Top */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark"></div>
      
      <div className="flex flex-col items-center">
        {/* Bank Card Graphic */}
        <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-8 relative overflow-hidden shadow-lg p-6 flex flex-col justify-between border border-slate-700">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-gold/10 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-center relative z-10">
            <span className="text-gold/80 font-serif font-bold tracking-widest text-xl uppercase">{gift.bankName}</span>
            <span className="text-white/30 font-medium">DEBIT</span>
          </div>
          
          <div className="relative z-10 text-center flex-grow flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-mono text-white tracking-[0.15em] font-medium block drop-shadow-md">
              {gift.accountNumber.replace(/(\d{4})/g, '$1 ')}
            </span>
          </div>
          
          <div className="relative z-10">
            <span className="text-white/60 text-xs uppercase tracking-widest block mb-1">Cardholder Name</span>
            <span className="text-white uppercase tracking-wider font-light">{gift.accountName}</span>
          </div>
        </div>
        
        <button 
          onClick={handleCopy}
          className="group/btn flex flex-col items-center gap-2 outline-none"
        >
          <div className="bg-gold/10 text-gold hover:bg-gold hover:text-white p-4 rounded-full transition-all duration-300 shadow-sm border border-gold/20 flex items-center justify-center">
            {copied ? <FaCheck className="text-xl" /> : <FaCopy className="text-xl group-hover/btn:scale-110 transition-transform" />}
          </div>
          <span className="font-semibold text-sm text-slate-600 tracking-wider">
            {copied ? "BERHASIL DISALIN" : "SALIN NO REKENING"}
          </span>
        </button>
      </div>
    </motion.div>
  );
}
