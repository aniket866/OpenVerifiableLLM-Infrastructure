import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircleIcon,
  SendIcon,
  UserIcon
} from "lucide-react";
import { useEffect, useState } from "react";

/* ------------------------------
   Animation Variants
--------------------------------*/

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseGlow = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* ------------------------------
   Fake Typing Animation
--------------------------------*/

const TypingDots = () => {
  return (
    <div className="flex gap-1 mt-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-cyan-400 rounded-full"
          animate={{
            opacity: [0.2, 1, 0.2]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};

/* ------------------------------
   Floating Chat Bubble
--------------------------------*/

const FloatingBubble = ({ side = "left", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.6, y: [0, -15, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      className={`absolute ${
        side === "left" ? "left-10" : "right-10"
      } bg-slate-800/60 backdrop-blur-md border border-slate-600/30 rounded-2xl px-4 py-3 text-sm text-slate-300 max-w-xs`}
    >
      <div className="flex items-center gap-2 mb-1">
        <UserIcon className="w-4 h-4 text-cyan-400" />
        <span className="text-xs text-slate-400">Contact</span>
      </div>
      <p>Hey, are you there?</p>
    </motion.div>
  );
};

/* ------------------------------
   Main Component
--------------------------------*/

const NoConversationPlaceholder = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTyping((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden bg-slate-900">

      {/* Ambient background glow */}
      <motion.div
        variants={pulseGlow}
        animate="animate"
        className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full"
      />

      {/* Floating bubbles */}
      <FloatingBubble side="left" delay={0} />
      <FloatingBubble side="right" delay={2.5} />

      {/* Main Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Icon */}
        <motion.div
          variants={floating}
          animate="animate"
          className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mb-8"
        >
          <MessageCircleIcon className="w-12 h-12 text-cyan-400" />
        </motion.div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-slate-200 mb-3">
          No conversation selected
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 max-w-lg mb-6 leading-relaxed">
          Choose a contact from the sidebar to start a new conversation or
          continue where you left off. Messages will appear here in real time.
        </p>

    
      </motion.div>
    </div>
  );
};

export default NoConversationPlaceholder;
