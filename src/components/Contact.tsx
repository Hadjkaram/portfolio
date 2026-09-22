"use client";

import { useState } from "react";
import {
  Mail,
  ArrowRight,
  MessageCircle,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "Ibrahim92karamoko@gmail.com";
  const whatsappNumber = "+2250716313708";
  const formattedPhone = "+225 07 16 31 37 08 / +225 01 01 59 41 53";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer ou utiliser WhatsApp.");
        setFormStatus("idle");
      }
    } catch {
      alert("Erreur de connexion. Veuillez réessayer ou passer par WhatsApp.");
      setFormStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* SECTION HEADER */}
      <div className="mb-14 border-b border-slate-800/80 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
          <Sparkles size={13} />
          <span>03. Partenariats & Contact</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Concrétisons Votre <br />
          <span className="text-gradient-cyan">Prochaine Architecture.</span>
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Disponible pour des missions de conseil stratégique, direction technique (Fractional CTO), audits de systèmes et déploiements IA sur mesure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLONNE GAUCHE : COORDONNÉES RAPIDES & DISPONIBILITÉ */}
        <div className="lg:col-span-5 space-y-6">
          {/* CARTE DISPONIBILITÉ */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Statut Actuel : Ouvert aux opportunités
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Basé à Abidjan (Côte d&apos;Ivoire), mobile pour missions régionales et internationales (Europe / Afrique / Remote).
            </p>
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400 shrink-0" />
                <span>Abidjan, Côte d&apos;Ivoire & International</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-cyan-400 shrink-0" />
                <span>Fuseau horaire GMT (Temps de réponse &lt; 24h)</span>
              </div>
            </div>
          </div>

          {/* CANAUX DIRECTS */}
          <div className="space-y-3">
            {/* WHATSAPP ACTION DIRECTE */}
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=Bonjour%20Ibrahim,%20j'ai%20consult%C3%A9%20votre%20portfolio%20et%20souhaiterais%20%C3%A9changer...`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/20 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                    WhatsApp Direct
                  </h4>
                  <p className="text-xs text-slate-400">{formattedPhone}</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* EMAIL AVEC COPIE EN 1 CLIC */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Email Professionnel</h4>
                  <p className="text-xs text-slate-400 font-mono">{emailAddress}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
                title="Copier l'adresse"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/el-hadj-ibrahim-v-karamoko-76951613b"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/20 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                    Profil LinkedIn Officiel
                  </h4>
                  <p className="text-xs text-slate-400">Réseau & recommandations professionnelles</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE SÉCURISÉ */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
            {formStatus === "success" ? (
              <div className="text-center py-16">
                <CheckCircle2 className="text-emerald-400 mx-auto mb-4" size={56} />
                <h4 className="text-2xl font-bold text-white mb-2">Message Transmis avec Succès</h4>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Merci de m&apos;avoir contacté. Je prendrai connaissance de votre demande et vous répondrai sous 24 heures.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 px-6 py-2.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Transmettez-moi les détails de votre besoin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Remplissez ce formulaire confidentiel pour initier une consultation technique.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/mnnevkag"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Nom complet & Titre *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Ex: Dr. Diallo / CTO Acme"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                        Adresse Email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="nom@organisation.com"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      Sujet de la mission
                    </label>
                    <select
                      name="subject"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      <option value="conseil-e-sante">Conseil / Transformation e-Santé & ERP</option>
                      <option value="architecture-ia">Architecture IA & Deep Tech (Vision, NLP)</option>
                      <option value="direction-tech">Direction Technique (Lead / Fractional CTO)</option>
                      <option value="audit-securite">Audit d&apos;Architecture & Sécurité (CISSP)</option>
                      <option value="autre">Autre opportunité stratégique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                      Description du projet & Objectifs *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Décrivez votre vision, les défis techniques ou organisationnels à surmonter..."
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:brightness-110 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Transmission en cours...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Transmettre directement à Ibrahim Karamoko</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}