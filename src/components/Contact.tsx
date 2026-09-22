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
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200">
      {/* SECTION HEADER ÉDITORIAL */}
      <div className="mb-14 pb-8 border-b border-zinc-200">
        <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3 flex items-center gap-2">
          <span>03 // Partenariats & Contact</span>
        </h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-tight tracking-tight uppercase">
          Démarrer une <br />
          <span className="text-zinc-500">Collaboration Stratégique.</span>
        </p>
        <p className="mt-4 text-zinc-600 text-base md:text-lg max-w-2xl leading-relaxed">
          Disponible pour missions de conseil stratégique, direction technique (Fractional CTO), audits de systèmes et déploiements IA sur mesure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* COLONNE GAUCHE : COORDONNÉES RAPIDES & DISPONIBILITÉ */}
        <div className="lg:col-span-5 space-y-4">
          {/* CARTE DISPONIBILITÉ */}
          <div className="p-8 bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-zinc-100">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                Statut : Disponible pour missions
              </span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
              Basé à Abidjan (Côte d&apos;Ivoire), disponible pour des interventions régionales et internationales (missions sur site ou hybrides).
            </p>
            <div className="space-y-3 text-xs text-zinc-600 font-mono">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-zinc-900 shrink-0" />
                <span>Abidjan, CI • Mobilité Afrique & Europe</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-zinc-900 shrink-0" />
                <span>Fuseau GMT • Réponse garantie &lt; 24h</span>
              </div>
            </div>
          </div>

          {/* CANAUX DIRECTS */}
          <div className="space-y-3">
            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}?text=Bonjour%20Ibrahim,%20j'ai%20consult%C3%A9%20votre%20portfolio%20et%20souhaiterais%20%C3%A9changer...`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-zinc-200 hover:border-zinc-950 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-emerald-700">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 text-sm font-mono uppercase tracking-wider">
                    WhatsApp Direct
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">{formattedPhone}</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-1 transition-all" />
            </a>

            {/* EMAIL AVEC COPIE EN 1 CLIC */}
            <div className="p-6 bg-white border border-zinc-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-sky-700">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 text-sm font-mono uppercase tracking-wider">
                    Email Professionnel
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">{emailAddress}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-xs font-mono text-zinc-800 flex items-center gap-1.5 transition-colors border border-zinc-300"
                title="Copier l'adresse"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-700" />
                    <span className="font-bold text-emerald-800">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
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
              className="p-6 bg-white border border-zinc-200 hover:border-zinc-950 transition-all flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-50 border border-zinc-200 text-blue-700">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 text-sm font-mono uppercase tracking-wider">
                    LinkedIn Officiel
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">Parcours vérifié & réseau</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE SÉCURISÉ CLAUDE STYLE */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 bg-white border border-zinc-200 shadow-sm">
            {formStatus === "success" ? (
              <div className="text-center py-16">
                <CheckCircle2 className="text-emerald-600 mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold text-zinc-950 mb-2">Message Transmis avec Succès</h4>
                <p className="text-zinc-600 text-sm max-w-md mx-auto">
                  Merci de m&apos;avoir contacté. Je prendrai connaissance de votre demande et vous répondrai sous 24 heures.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                >
                  Envoyer un nouveau message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 pb-4 border-b border-zinc-100">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-950 mb-1">
                    Envoyer un message direct
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    Formulaire chiffré et sécurisé pour consultations techniques.
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Votre nom ou organisation"
                        className="w-full bg-zinc-50 border border-zinc-300 p-3.5 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2">
                        Adresse Email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="w-full bg-zinc-50 border border-zinc-300 p-3.5 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2">
                      Nature de la mission
                    </label>
                    <select
                      name="subject"
                      className="w-full bg-zinc-50 border border-zinc-300 p-3.5 text-sm text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all font-sans"
                    >
                      <option value="conseil-e-sante">Conseil / Transformation e-Santé & ERP Hospitalier</option>
                      <option value="architecture-ia">Architecture IA & Deep Tech (Vision, NLP)</option>
                      <option value="direction-tech">Direction Technique (Lead / Fractional CTO)</option>
                      <option value="audit-securite">Audit d&apos;Architecture & Sécurité (CISSP)</option>
                      <option value="autre">Autre opportunité stratégique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-700 mb-2">
                      Description du besoin & Enjeux *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Détaillez les objectifs, défis techniques ou périmètre de votre projet..."
                      className="w-full bg-zinc-50 border border-zinc-300 p-3.5 text-sm text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-all resize-none font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <span>Transmission en cours...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Transmettre directement à Ibrahim</span>
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