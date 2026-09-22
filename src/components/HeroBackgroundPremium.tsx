"use client";

import { motion } from "framer-motion";

export default function HeroBackgroundPremium() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 1. GRILLE ARCHITECTURALE VECTORIELLE AVEC MASQUE RADIAL (STYLE LINEAR / CLAUDE) */}
      <div 
        className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]" 
      />

      {/* 2. MATRICE DE MICRO-POINTS BLEU CIEL POUR PROFONDEUR NUMÉRIQUE */}
      <div 
        className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#0284c7_1.2px,transparent_1.2px)] [background-size:24px_24px]" 
      />

      {/* 3. LUEURS D'AMBIANCE CINÉMATIQUES PREMIUM (ORBES EN FLOTTEMENT DOUX) */}
      {/* Orbe 1 : Céleste / Cyan haut gauche */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-sky-400/15 via-blue-500/10 to-transparent blur-[120px]"
      />

      {/* Orbe 2 : Indigo / Violet royal au centre droite (derrière la photo signature) */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-sky-400/10 blur-[130px]"
      />

      {/* Orbe 3 : Ambre subtil pour la chaleur éditoriale */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] left-[25%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-amber-400/8 via-rose-400/5 to-transparent blur-[140px]"
      />

      {/* 4. MARQUEURS TECHNIQUES DISCRETS (+) STYLE INGENIERIE DE PRECISION */}
      <div className="absolute top-28 left-8 text-zinc-400/30 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-28 right-8 text-zinc-400/30 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-1/2 left-10 text-zinc-400/30 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-1/2 right-10 text-zinc-400/30 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-16 left-1/3 text-zinc-400/25 font-mono text-[10px] select-none tracking-widest uppercase">
        SYS.READY // CLUSTER.NODE.01
      </div>

      {/* 5. FIN FAISCEAU LUMINEUX HORIZONTAL SUBTIL EN HAUT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
    </div>
  );
}
