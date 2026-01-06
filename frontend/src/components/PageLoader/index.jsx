import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { ChatSkeleton } from "./ChatSkeleton";
import { floatSlow, pulse } from "./animations";

export default function PageLoader() {
  return (
    <div className="relative h-screen w-full bg-slate-900 overflow-hidden flex items-center justify-center">

      <ParticleField />

      {/* Ambient glows */}
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 bg-indigo-500/30 blur-[160px]"
        {...floatSlow}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 h-96 w-96 bg-purple-500/30 blur-[160px]"
        {...floatSlow}
      />

      {/* Chat simulation */}
      <div className="relative z-10 w-full max-w-md space-y-6">
        <ChatSkeleton side="left" />
        <ChatSkeleton side="right" />
        <ChatSkeleton side="left" />
      </div>

      {/* Status */}
      <motion.div
        className="absolute bottom-16 text-slate-400 text-sm tracking-wide"
        {...pulse}
      >
        Initializing secure session…
      </motion.div>
    </div>
  );
}
