import { motion } from "framer-motion";
import { TypingSimulation } from "./TypingSimulation";

export function ChatSkeleton({ side }) {
  return (
    <motion.div
      className={`flex items-end gap-3 ${side === "right" ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-10 w-10 rounded-full bg-slate-700" />
      <TypingSimulation />
    </motion.div>
  );
}
