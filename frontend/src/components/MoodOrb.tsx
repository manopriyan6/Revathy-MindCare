"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Mood = "calm" | "anxious" | "stressed" | "sad";

const moodConfig: Record<
  Mood,
  { inner: string; bg: string; label: string; animation: string }
> = {
  calm: {
    inner: "from-[#A8D5BA] to-[#4A90E2]",
    bg: "rgba(168,213,186,0.3)",
    label: "Feeling Calm",
    animation: "Breathing Gently",
  },
  anxious: {
    inner: "from-[#4A90E2] to-[#93c5fd]",
    bg: "rgba(74,144,226,0.3)",
    label: "Feeling Anxious",
    animation: "Breathing Ripple",
  },
  stressed: {
    inner: "from-[#F4C430] to-[#fb923c]",
    bg: "rgba(244,196,48,0.25)",
    label: "Feeling Stressed",
    animation: "Growth Path",
  },
  sad: {
    inner: "from-[#a78bfa] to-[#4A90E2]",
    bg: "rgba(167,139,250,0.25)",
    label: "Feeling Low",
    animation: "Gentle Pulse",
  },
};

export default function MoodOrb() {
  const [currentMood, setCurrentMood] = useState<Mood>("calm");
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const mood = moodConfig[currentMood];

  const moods: Mood[] = ["calm", "anxious", "stressed", "sad"];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* The Orb */}
      <div className="relative flex items-center justify-center w-56 h-56">
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${mood.bg} 0%, transparent 70%)`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: currentMood === "anxious" ? 1.8 : 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute inset-6 rounded-full border-2 border-white/30"
          style={{
            background: `radial-gradient(circle, ${mood.bg} 0%, transparent 80%)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: currentMood === "stressed" ? 6 : 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Kolam-style dashed ring */}
        <motion.div
          className="absolute inset-3 rounded-full border-[3px] border-dashed border-[#F4C430]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner Core */}
        <motion.div
          className={`relative w-28 h-28 rounded-full bg-gradient-to-tr ${mood.inner} shadow-[0_0_60px_rgba(74,144,226,0.5)] cursor-pointer flex flex-col items-center justify-center z-10 border-2 border-white/50`}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          onClick={() => router.push("/booking")}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl mb-0.5">
            {currentMood === "calm"
              ? "🌿"
              : currentMood === "anxious"
                ? "🌊"
                : currentMood === "stressed"
                  ? "✨"
                  : "💫"}
          </span>
          <span className="text-white text-[10px] font-bold text-center px-2 leading-tight drop-shadow-md">
            {hovered ? "Book Session" : mood.label}
          </span>
        </motion.div>
      </div>

      {/* Mood selector */}
      <div className="flex gap-2">
        {moods.map((m) => (
          <button
            key={m}
            onClick={() => setCurrentMood(m)}
            className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
              currentMood === m
                ? "border-[#4A90E2] scale-110"
                : "border-white/60"
            } bg-gradient-to-tr ${moodConfig[m].inner} shadow-md`}
            title={moodConfig[m].label}
          />
        ))}
      </div>

      <p className="text-xs text-gray-500 font-medium">
        🌊 {mood.animation} · Select your mood
      </p>
    </div>
  );
}
