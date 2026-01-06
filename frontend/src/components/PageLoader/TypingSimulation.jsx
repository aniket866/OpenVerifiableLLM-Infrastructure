import { motion } from "framer-motion";

export function TypingSimulation() {
  return (
    <div className="flex gap-1 px-3 py-2 bg-slate-800 rounded-full">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="h-2 w-2 bg-slate-400 rounded-full"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
}
