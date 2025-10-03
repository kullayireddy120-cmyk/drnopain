import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#7E287D] via-[#A34D9D] to-[#7E287D]"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-[#7E287D] to-[#A34D9D] bg-clip-text text-transparent">
                N
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white mb-2"
            >
              NoPain Dental Lounge
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-2 justify-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
