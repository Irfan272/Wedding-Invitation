import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function RSVP() {
  const [formData, setFormData] = useState({ name: '', attendance: 'yes', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', attendance: 'yes', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-6 max-w-4xl border-2 border-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4 text-shadow-sm">RSVP</h2>
          <p className="text-slate-500 font-light">Konfirmasi kehadiran Anda merupakan kehormatan bagi kami.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto border border-white"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide uppercase">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white"
                placeholder="Masukkan nama Anda"
              />
            </div>
            
            <div>
              <label htmlFor="attendance" className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide uppercase">Kehadiran</label>
              <select 
                id="attendance" 
                value={formData.attendance}
                onChange={e => setFormData({...formData, attendance: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="yes">Ya, Saya akan hadir</option>
                <option value="no">Maaf, Saya tidak bisa hadir</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide uppercase">Pesan (Opsional)</label>
              <textarea 
                id="message" 
                rows="4"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white resize-none"
                placeholder="Tulis pesan untuk mempelai..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-slate-800 text-white py-4 rounded-xl hover:bg-gold transition-colors duration-300 shadow-lg font-medium tracking-wide disabled:bg-slate-400 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <FaSpinner className="animate-spin text-xl" />
              ) : (
                <>
                  <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Kirim Konfirmasi
                </>
              )}
            </button>

            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-center text-sm font-light tracking-wide mt-4"
              >
                Terima kasih! Konfirmasi kehadiran Anda telah terkirim.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
