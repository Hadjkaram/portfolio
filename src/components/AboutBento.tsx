"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Layers, ArrowUpRight, GraduationCap, ShieldCheck } from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-[0.3em] text-[var(--primary)] uppercase mb-4">01. Profil & Expertise</h2>
        <p className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
          Je ne code pas juste des apps.<br />
          <span className="text-gray-400">Je conçois des écosystèmes.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* BLOC 1 : BIO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-2 bg-gray-900 rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-[80px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          
          <div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit mb-8 border border-white/10">
              <Layers className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Consultant e-Santé & Architecte IA</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Actuellement impliqué auprès du Ministère de la Santé de Côte d'Ivoire. Je pilote des transformations digitales complexes, alliant intelligence artificielle (Computer Vision, NLP) et architectures backend robustes pour des solutions à l'échelle nationale.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="text-5xl font-black text-[var(--primary)]">10+</div>
            <div className="text-sm font-mono text-gray-400 uppercase leading-tight">Années<br />d'expérience</div>
          </div>
        </motion.div>

        {/* BLOC 2 : STACK IA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-white border border-gray-200 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-[var(--primary)]/10 transition-all flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-xl font-bold text-gray-900">Intelligence Artificielle</h4>
            <BrainCircuit className="text-[var(--primary)]" size={28} />
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {["Deep Learning", "Computer Vision", "NLP", "FastAPI", "Python", "TensorFlow"].map(tech => (
              <span key={tech} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BLOC 3 : FULLSTACK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-blue-50 border border-blue-100 rounded-[2rem] p-8 flex flex-col justify-between"
        >
          <div>
            <Database className="text-blue-500 mb-6" size={28} />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Ingénierie Fullstack</h4>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              Conception d'architectures scalables avec Next.js, Spring Boot, Flutter, déployées sur AWS & Docker.
            </p>
          </div>
        </motion.div>

        {/* BLOC 4 : DIPLÔMES & CERTIFS AVEC LIEN LINKEDIN ACTIF */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:col-span-2 bg-gradient-to-br from-[var(--primary)] to-blue-600 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-white opacity-[0.03] pattern-grid-lg"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-white" size={28} />
              <h4 className="text-2xl font-bold text-white">Académique & Certifications</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90">
              <div>
                <h5 className="font-mono text-xs text-blue-200 uppercase tracking-widest mb-4">Diplômes Majeurs</h5>
                <ul className="space-y-4">
                  <li>
                    <strong className="block text-white text-lg">HEC Maroc</strong>
                    <span className="text-sm text-blue-100">Masters Executive IA, CyberSécurité & Data Science</span>
                  </li>
                  <li>
                    <strong className="block text-white text-lg">PIGIER CIV</strong>
                    <span className="text-sm text-blue-100">Licence Professionnelle en Génie Logiciel</span>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs text-blue-200 uppercase tracking-widest mb-4">Certifications Globales</h5>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={18} className="mt-0.5 text-blue-300 flex-shrink-0" />
                    <span><strong>CISSP</strong> & <strong>CompTIA Security+</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={18} className="mt-0.5 text-blue-300 flex-shrink-0" />
                    <span><strong>Imperial College London</strong> (Digital Health)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={18} className="mt-0.5 text-blue-300 flex-shrink-0" />
                    <span><strong>Stanford Univ.</strong> (DeepLearning.AI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck size={18} className="mt-0.5 text-blue-300 flex-shrink-0" />
                    <span><strong>Google</strong> (Data Analytics & Security)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex justify-start md:justify-end border-t border-white/20 pt-6">
            <a 
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full transition-all"
            >
              <span className="font-bold text-white text-sm">Voir sur LinkedIn</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-blue-600" size={16} />
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}