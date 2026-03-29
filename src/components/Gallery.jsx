import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script text-gold mb-4">Our Gallery</h2>
          <p className="text-slate-500 font-light">Momen-momen bahagia kami</p>
        </motion.div>

        {/* CSS Grid for masonry-like feel */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-md group border-4 border-white ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
              onClick={() => setSelectedImage(img.image)}
            >
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Fallback image if paths are local testing */}
              <img 
                src={img.image.startsWith('/') ? `https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&w=800&q=80` : img.image}
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[200px] group-hover:scale-110 transition-transform duration-1000"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-3xl hover:text-gold transition-colors z-50 focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.startsWith('/') ? `https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&w=1920&q=80` : selectedImage}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
