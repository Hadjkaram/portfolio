"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Globe, Lock, Eye, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PolitiqueConfidentialitePage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 py-12 px-6 md:px-12 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* RETOUR PORTFOLIO + SÉLECTEUR DE LANGUE */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 hover:border-zinc-950 transition-colors shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>{t("Retour au Portfolio", "Back to Portfolio")}</span>
          </Link>

          <div className="flex items-center border border-zinc-300 bg-white p-0.5 font-mono text-xs shadow-sm">
            <span className="px-2 text-zinc-400 flex items-center gap-1">
              <Globe size={12} />
              <span className="hidden sm:inline">{t("Langue", "Language")}:</span>
            </span>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 uppercase transition-colors ${
                language === "fr" ? "bg-zinc-950 text-white font-bold" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 uppercase transition-colors ${
                language === "en" ? "bg-zinc-950 text-white font-bold" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* CONTAINER DOCUMENT ÉDITORIAL */}
        <article className="bg-white border border-zinc-300 p-8 md:p-14 shadow-sm space-y-8">
          {/* HEADER */}
          <header className="border-b-2 border-zinc-900 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-300 text-[10px] font-mono uppercase tracking-widest text-emerald-800 mb-3">
              <ShieldCheck size={12} />
              <span>Protection des Données & Vie Privée</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
              Politique de Confidentialité
            </h1>
            <p className="text-xs font-mono text-zinc-500 mt-2">
              Conformité stricte : RGPD (Règlement UE 2016/679) & Loi n° 2013-450 (Côte d&apos;Ivoire)
            </p>
          </header>

          {/* ENGAGEMENT PRINCIPAL */}
          <div className="p-4 bg-zinc-50 border-l-4 border-sky-600">
            <p className="text-sm text-zinc-800 leading-relaxed font-medium">
              En tant que <strong>Tech Lead IA & Cybersécurité certifié CISSP®</strong>, la sécurité de l&apos;information et le respect absolu de la vie privée ne sont pas de simples obligations juridiques, mais des impératifs d&apos;ingénierie intégrés dès la conception (<em>Privacy by Design & by Default</em>).
            </p>
          </div>

          {/* RESPONSABLE DE TRAITEMENT */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1 flex items-center gap-2">
              <Lock size={15} className="text-zinc-700" />
              1. Responsable de Traitement
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Le responsable du traitement des données à caractère personnel collectées sur ce portfolio est :<br />
              <strong>El Hadj Ibrahim V. Karamoko</strong><br />
              Email dédié : <span className="font-mono text-sky-700 font-bold">ibrahim92karamoko@gmail.com</span><br />
              Localisation : Abidjan, Côte d&apos;Ivoire.
            </p>
          </section>

          {/* DONNÉES COLLECTÉES */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              2. Nature des Données Collectées
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Nous limitons la collecte aux seules données strictement nécessaires à l&apos;interaction professionnelle :
            </p>
            <ul className="list-disc list-outside pl-5 text-sm text-zinc-700 space-y-1.5 leading-relaxed font-sans">
              <li><strong>Formulaire de Contact :</strong> Nom, adresse email, objet de la mission et message transmis volontairement par l&apos;utilisateur.</li>
              <li><strong>Assistant Conversationnel IA :</strong> Les échanges initiés dans le chatbot local sont traités en temps réel pour répondre à vos questions et ne sont ni enregistrés ni cédés à des tiers publicitaires.</li>
              <li><strong>Données Techniques :</strong> Données de journalisation serveur standardisées (adresse IP anonymisée, type de navigateur, horodatage) indispensables à la prévention des attaques informatiques et à la cybersécurité.</li>
            </ul>
          </section>

          {/* FINALITÉS ET BASE LÉGALE */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              3. Finalités & Bases Légales du Traitement
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Les données recueillies sont exploitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-outside pl-5 text-sm text-zinc-700 space-y-1 leading-relaxed">
              <li>Traitement et réponse aux propositions de mandats, collaborations et recrutements (intérêt légitime & mesures précontractuelles).</li>
              <li>Maintien de l&apos;intégrité, de la résilience et de la défense opérationnelle du site internet (obligation de sécurité).</li>
              <li>Gestion des préférences de navigation et de consentement (consentement explicite de l&apos;utilisateur).</li>
            </ul>
          </section>

          {/* SÉCURITÉ DE HAUT NIVEAU */}
          <section className="space-y-3 p-4 bg-zinc-50 border border-zinc-200">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 flex items-center gap-2">
              <Eye size={16} className="text-emerald-700" />
              4. Mesures de Sécurité & Non-Commercialisation
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Chiffrement de bout en bout :</strong> Toutes les communications transitent via des protocoles sécurisés HTTPS / TLS 1.3.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zéro Revente de Données :</strong> Vos données ne font l&apos;objet d&apos;aucune commercialisation, cession ou monétisation auprès d&apos;annonceurs ou de data brokers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hébergement Sécurisé :</strong> Serveurs d&apos;hébergement conformes aux certifications de sécurité internationales (ISO 27001, SOC 2).</span>
              </li>
            </ul>
          </section>

          {/* GESTION DES COOKIES */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              5. Politique Relative aux Cookies & Stockage Local
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Ce portfolio utilise des traceurs fonctionnels et le stockage local du navigateur (<em>localStorage / sessionStorage</em>) strictement dédiés au bon fonctionnement :
            </p>
            <ul className="list-disc list-outside pl-5 text-sm text-zinc-700 space-y-1 leading-relaxed">
              <li><strong className="font-mono text-xs">ik_portfolio_welcome_seen</strong> : Évite la réapparition intempestive du popup de bienvenue au sein de la même session.</li>
              <li><strong className="font-mono text-xs">ik_cookie_consent</strong> : Conserve votre choix de confidentialité (Acceptation ou restriction aux seuls éléments essentiels).</li>
            </ul>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Vous pouvez à tout moment modifier ou révoquer vos choix en cliquant sur le lien <strong>&quot;Gestion des Cookies&quot;</strong> situé dans le pied de page du site.
            </p>
          </section>

          {/* DROITS DES UTILISATEURS */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              6. Vos Droits & Modalités d&apos;Exercice
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Conformément à la réglementation applicable (RGPD et Loi ivoirienne n° 2013-450), vous bénéficiez des droits suivants :
            </p>
            <ul className="list-disc list-outside pl-5 text-sm text-zinc-700 space-y-1 leading-relaxed">
              <li>Droit d&apos;accès et d&apos;obtention d&apos;une copie de vos données personnelles.</li>
              <li>Droit de rectification de toute information inexacte ou obsolète.</li>
              <li>Droit d&apos;effacement (&quot;droit à l&apos;oubli&quot;) de vos données de contact.</li>
              <li>Droit à la limitation ou à l&apos;opposition au traitement.</li>
            </ul>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Pour exercer l&apos;un de ces droits, il vous suffit d&apos;adresser un message écrit précisant votre demande à : <span className="font-mono text-sky-700 font-bold">ibrahim92karamoko@gmail.com</span>. Une réponse vous sera apportée sous 30 jours ouvrés.
            </p>
          </section>

          {/* CONTACT */}
          <footer className="pt-6 border-t border-zinc-200 text-xs font-mono text-zinc-600 flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <strong>Délégué à la Protection des Données :</strong><br />
              El Hadj Ibrahim V. Karamoko &mdash; Abidjan, Côte d&apos;Ivoire
            </div>
            <div className="text-left sm:text-right">
              Révision de sécurité : {new Date().getFullYear()}
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
