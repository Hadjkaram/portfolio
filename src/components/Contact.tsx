"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [activeMethod, setActiveMethod] = useState<'none' | 'email'>('none');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        alert("Erreur lors de l'envoi. Merci de réessayer.");
        setFormStatus('idle');
      }
    } catch (error) {
        alert("Erreur de connexion.");
        setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto mb-20">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[var(--primary)] text-xl font-bold">03.</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Démarrer une collaboration</h2>
        <div className="h-[1px] bg-gray-200 flex-1 ml-6"></div>
      </motion.div>

      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Comment souhaitez-vous échanger ?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          
          {/* OPTION 1 : WHATSAPP */}
          <motion.a 
            href="https://wa.me/2250716313708?text=Bonjour%20Ibrahim,%20j'ai%20vu%20votre%20portfolio..."
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 h-64"
          >
            <div className="p-4 bg-green-50 rounded-full text-green-500 group-hover:scale-110 transition-transform">
              <MessageCircle size={40} />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Direct</h4>
              <p className="text-gray-500 text-sm mb-4">Réponse rapide & instantanée</p>
              <span className="text-green-500 text-sm font-semibold flex items-center justify-center gap-2">
                +225 07 16 31 37 08 <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>

          {/* OPTION 2 : EMAIL */}
          <motion.button 
            onClick={() => setActiveMethod(activeMethod === 'email' ? 'none' : 'email')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative p-8 rounded-3xl transition-all cursor-pointer flex flex-col items-center justify-center gap-4 h-64 border ${
              activeMethod === 'email' 
                ? 'bg-blue-50 border-[var(--primary)]' 
                : 'bg-white border-gray-100 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/10'
            }`}
          >
            <div className="p-4 bg-blue-50 rounded-full text-[var(--primary)] group-hover:scale-110 transition-transform">
              <Mail size={40} />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email Professionnel</h4>
              <p className="text-gray-500 text-sm mb-4">Pour détailler votre projet</p>
              <span className="text-[var(--primary)] text-sm font-semibold flex items-center justify-center gap-2">
                Ouvrir le formulaire <ArrowRight size={14} />
              </span>
            </div>
          </motion.button>
        </div>

        {/* LE FORMULAIRE */}
        <AnimatePresence>
          {activeMethod === 'email' && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="w-full overflow-hidden"
            >
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 w-full relative">
                
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={60} />
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Envoyé !</h4>
                    <p className="text-gray-500">Merci de m'avoir contacté. Je reviens vers vous très vite.</p>
                  </div>
                ) : (
                  <>
                     <h4 className="text-xl font-bold text-gray-900 mb-6">Envoyez-moi un message direct</h4>
                     <form action="https://formspree.io/f/mnnevkag" method="POST" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Nom</label>
                          <input required name="name" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none transition-all placeholder-gray-400" placeholder="Votre Nom" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Email</label>
                          <input required name="email" type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none transition-all placeholder-gray-400" placeholder="votre@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Message</label>
                        <textarea required name="message" rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-900 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] focus:outline-none transition-all placeholder-gray-400 resize-none" placeholder="Détails du projet..."></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-[var(--primary)] transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? 'Envoi en cours...' : <><Send size={18} /> Envoyer directement à Ibrahim</>}
                      </button>
                     </form>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}